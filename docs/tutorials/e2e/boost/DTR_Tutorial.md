# DTR Tutorial

## Tutorial Goal

Alongside the connector, the Digital Twin Registry (DTR) is another central component in a data ecosystem when it comes to exchanging digital twins. Anyone who provides digital twins in Catena-X must register them in a DTR so that they can be found by other parties.

This tutorial focuses on the working with the DTR. You will learn what the DTR is, how to deploy it and go through a complete use case scenario by depositing a DTR in the EDC, registering a digital twin in the DTR, and showing how external parties can find and consume the digital twin.

## Introduction

Catena-X uses the Asset Administration Shell (AAS) to represent digital twins. Such a digital twin is basically a shell with an ID (“shellId”) in UUID-format that makes it uniquely identifiable and contains an ID that connects the shell with the original asset it represents (e.g. the “manufacturerPartId”). This shell also contains SubmodelDescriptors which reference to submodels that contain the actual data of specific aspects of the asset.

The Digital Twin Registry (DTR) contains a list of all registered digital twins of the owner and therefore acts as an address book for Digital Twins. With the DTR of a data provider, a data consumer can therefore find digital twin and also get directed to the desired submodels of the twin.

Further details can be found in the [Digital Twin KIT][dt-kit] or the [sldt-digital-twin-registry][sldt-dtr] Github repository.

In this tutorial, Bob will assume the role of an automotive supplier that manufactures gearboxes and acts as the data provider. Alice represents an OEM that uses these gearboxes. Alice's goal is to calculate the product carbon footprint (PCF) of a car, and she also needs the carbon footprints of the individual parts to calculate the total footprint. Therefore, Alice is the data consumer in this tutorial.

The steps of the tutorial are as follows

- Bob registers a DTR at his EDC
- Bob registers a Digital Twin at his DTR
- Alice finds and consumes the Digital Twin

This tutorial will guide you through the steps outlined above. For a deeper understanding, more detailed documentation will be linked.

### High Level Architecture

## Exchange Digital Twins

### Register a DTR in your EDC

#### Create the DTR asset

To ensure that Bob’s DTR becomes visible for Alice and to start the data exchange between them, Bob has to create a data asset.
Action (Bob): Create an asset using the following command:
(note: that the "asset:prop:type" is standardized with "data.core.digitalTwinRegistry" for the Digital Twin Registry.)

```curl
{
   "@context":{
      "edc":"https://w3id.org/edc/v0.0.1/ns/",
      "cx-common":"https://w3id.org/catenax/ontology/common#",
      "cx-taxo":"https://w3id.org/catenax/taxonomy#",
      "dct":"https://purl.org/dc/terms/"
   },
   "@id":"{{ASSET_ID}}",
   "properties":{
      "dct:type":{
         "@id":"cx-taxo:DigitalTwinRegistry"
      }
   },
   "dataAddress":{
      "@type":"DataAddress",
      "type":"HttpData",
      "baseUrl":"{{BACKEND_SERVICE}}",
      "proxyPath":"true",
      "proxyBody":"true",
      "proxyMethod":"true",
      "proxyQueryParams":"true",
      "oauth2:clientId":"{{REGISTRY_CLIENT_ID}}",
      "oauth2:clientSecretKey":"{{REGISTRY_CLIENT_SECRET_KEY}}",
      "oauth2:tokenUrl":"{{REGISTRY_TOKEN_ENDPOINT}}",
      "oauth2:scope":"{{REGISTRY_TOKEN_SCOPE}}"
   }
}
```

#### Create a policy

After bob has created an asset, he must define a BPN-restrictive policy in order to give Alice access to the asset. This policy is not standardized and can be chosen according to the needs of Alice. Bob wants to define that only Alice can see the DTR Asset.

Action (Bob): Defines the access policy using the following command:

```curl
{
    "@context": {
        "odrl": "http://www.w3.org/ns/odrl/2/"
    },
    "@type": "PolicyDefinitionRequestDto",
    "@id": "{{POLICY_ID}}",
    "policy": {
  "@type": "Policy",
  "odrl:permission" : [{
   "odrl:action" : "USE",
   "odrl:constraint" : {
    "@type": "LogicalConstraint",
    "odrl:or" : [{
     "@type" : "Constraint",
     "odrl:leftOperand" : "BusinessPartnerNumber",
     "odrl:operator" : {
                        "@id": "odrl:eq"
                    },
     "odrl:rightOperand" : "{{CONSUMER_BPN}}"
    }]
   }
  }]
    }
}
```

#### Contract Definition

As an Access Policy has already been created, a Contract Definition must be created and linked into the data asset.
Action (Bob): Create the contract policy using the following command:

```curl
{
    "@context": {},
    "@id": "{{CONTRACT_DEFINITION_ID}}",
    "@type": "ContractDefinition",
    "accessPolicyId": "{{ACCESS_POLICY_ID}}",
    "contractPolicyId": "{{CONTRACT_POLICY_ID}}",
    "assetsSelector" : {
        "@type" : "CriterionDto",
        "operandLeft": "{{EDC_NAMESPACE}}id",
        "operator": "=",
        "operandRight": "{{ASSET_ID}}"
    }
}
```

#### Negotiation

The DTR Asset from Bob is now available for Alice to request via contract negotiation. But at the moment it is still empty. Alice has to register Digital Twin (DT) at her DTR.
SOURCE FOR THIS: https://github.com/eclipse-tractusx/sldt-digital-twin-registry/tree/main/docs#access-control-to-digital-twins-based-on-the-bpn-business-partner-number-tenantid
Continue the tutorial in Consume Digital Twins

### Register a Digital Twin

The basic steps for providing digital twins with the DTR contain:

- Create a compliant submodel
- Store the submodel on a submodel server
- Register/create a digital twin at the DTR
- Reference the Submodel in the digital twin

#### Create a submodel

For this tutorial we provide you with a Catena-X compliant submodel. Thefore the first step is already taken care of.

#### Host/store a submodel

As a data provider you need to host/store your submodels somewhere. Usually a submodel server is used for this task. For this tutorial we provide a service called "backend-data-service" (short BDS). This service fulfills the role of the submodel server in this tutorial. It can store any text based data (e.g. JSON, XML, plain text) under a specific ID. This data can be received again, by using the same ID. As the data provider we will use this service to host our data.
Use the following command to host the submodel on the BDS. (./1-create-data.sh).

#### Create Contract Definition at EDC with the submodel

In the last step, we hosted/stored our submodel in the BDS. However, because we want to preserve data sovereignty, we cannot directly release access to the BDS. Instead, the data exchange shall take place via the EDC. In this step, we therefore create a data offering in the EDC, which contains the submodel in the BDS.
We can use the following command for this: Create Contract definition

#### Register/create a Digital Twin at the DTR

Now that we have hosted our submodel at the BDS and offered it at the EDC for sovereign data exchange, we want to connect it to the Digital Twin it belongs to and make it more accessible for consumption. This is where the DTR provides it value.
The registration of a digital twin in Catena-X is equivalent to the creation of a new digital twin. Thus, a data provider should always ensure that there is no shell-descriptor created for the respective “specificAssetIds” yet to avoid duplicates. The specificAssetId refers to the part id of the original asset. Usually the “manufacturerPartId”.
In this tutorial we have first developed our submodel and now create the digital twin afterwards. Thus we have to make sure to create the Digital Twin in a way that it is consistent with the information of the data in the submodel. A very important part of this consistency is to use the same shellId (“id” in UUID). This ID uniquely links the two objects.
(In a later section of this tutorial we will also go through the reversed process of adding a submodel to an existing digital twin.)
To achieve this consistency and connection the following values need to be equal:

- bullet one
- bulet two

With the following command you can register/create a digital twin at the DTR. Fill out the marked fields with the values provided in the submodel as explained above.

```curl
POST /shell-descriptors
{
  "id": "urn:uuid:e5c96ab5-896a-1234-8761-efd74777ca97",
  "idShort": "myAas",
  "specificAssetIds": [
    {
      "name": "manufacturerPartId",
      "value": "123-345-567103",
      "externalSubjectId": {
        "type": "ExternalReference",
        "keys": [
          {
            "type": "GlobalReference",
            "value": "{{BPN of the party privileged}}"
          }
        ]
      }
    }
  ], Quelle nur der obere Teil, weil hier nur DT erstellt werden soll. Submodel Descriptor kommt danach.
  ```

You have now successfully created/registered a Digital Twin at your DTR.  Right now it is still empty. Thus, the next step is to reference our submodel in the Digital Twin to make it findable for consumers.

#### Reference a Submodel in the Digital Twin

Hier packen wir den submodelDescriptor zum DT hinzu, der dann auf das Data Offering verweist
Verweis via DSP subprotocol. D.h. wir verweisen direkt auf das Offering (dsp Endpoint = EDC Endpoint, id=Asset bzw contract Id)

```curl
"subprotocol": "DSP",
            "subprotocolBody": "id=123;dspEndpoint=http://edc.control.plane/api/v1/dsp",
            "subprotocolBodyEncoding": "plain",
            "securityAttributes": [
              {
                "type": "NONE",
                "key": "NONE",
                "value": "NONE"
              }
            ]

"submodelDescriptors": [
    {
      "id": "e5c96ab5-896a-482c-8761-efd74777ca97",
      "semanticId": {
        "type": "ExternalReference",
        "keys": [
          {
            "type": "GlobalReference",
            "value": "urn:bamm:io.catenax.material_for_recycling:1.1.0#MaterialForRecycling"
          }
        ]
      },
      "endpoints": [
        {
          "interface": "SUBMODEL-3.0",
          "protocolInformation": {
            "href": "https://edc.data.plane/mypath/submodel",
            "endpointProtocol": "HTTP",
            "endpointProtocolVersion": [
              "1.1"
            ],
            "subprotocol": "DSP",
            "subprotocolBody": "id=123;dspEndpoint=http://edc.control.plane/api/v1/dsp",
            "subprotocolBodyEncoding": "plain",
            "securityAttributes": [
              {
                "type": "NONE",
                "key": "NONE",
                "value": "NONE"
              }
            ]
          }
        }
      ]
    }
  ]
} Quelle, nur der untere Part
```

#### Registering new Submodels at an existing Digital Twins

If you want to add a submodel to an already existing digital twin, you just need to reference the ID (UUID )of the digital twin in the submodel to link the two.

Lets also go through this process. …

### Find and consume a Digital Twin

## Notice

This work is licensed under the [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).

- SPDX-License-Identifier: CC-BY-4.0
- SPDX-FileCopyrightText: 2024 sovity GmbH
- SPDX-FileCopyrightText: 2024 msg systems AG
- Source URL: https://github.com/eclipse-tractusx/eclipse-tractusx.github.io

[dt-kit]: https://eclipse-tractusx.github.io/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/dt-kit-software-development-view/
[sldt-dtr]: https://github.com/eclipse-tractusx/sldt-digital-twin-registry/tree/main/docs