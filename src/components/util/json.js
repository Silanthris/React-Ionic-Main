export const getPlaceItems = () => {

    const places = [
        {
            name: "Dores de Cabeça",
            rating: 8,
            type: "pub",
        },
        {
            name: "Ouvi Dizer",
            rating: 5,
            type: "restaurant",
        }
    ];

    return places;
}

export const getBigJson = () => {

    const bigJson = [
        {
            "code":"b650540f-db01-7064-0c7c-d0f3d110a217",
            "versionNumber":31,
            "bookingCode":"c0c02fb5-7901-b0d3-1370-780c6cd0c351",
            "carrierBookingReference":"CMR0002",
            "originOfGoods":"Portugal",
            "origin":"Porto",
            "destination":"Barcelona",
            "loadingDate":"2022-03-02T15:30:54.000Z",
            "deliveryDate":"2022-03-02T15:30:56.000Z",
            "arrivalForLoading":"2022-03-16T15:30:58.000Z",
            "loadingDeparture":"2022-03-16T15:31:01.000Z",
            "arrivalForUnloading":"2022-03-09T17:26:08.000Z",
            "unloadingDeparture":"2022-03-23T15:31:07.000Z",
            "freightType":{
               "cargoType":{
                  "fcl":true,
                  "lcl":true,
                  "bulk":true,
                  "custom":true,
                  "express":false,
                  "movings":false,
                  "air":true,
                  "roro":false,
                  "ftl":true,
                  "ltl":true,
                  "broker":true,
                  "id":9,
                  "name":"Containerized",
                  "code":"9",
                  "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693263.25.53805417597828",
                  "persisted":true
               },
               "groupName":"Multimodal solutions",
               "examples":"The container will carry only the goods of a single client (boxes, pallets, rollers, machines)",
               "iconPath":"https://localhost/media/icons/freight-type/fcl.svg",
               "sequence":1,
               "description":"I need a full container for my cargo.",
               "id":1,
               "name":"FCL - Full container load",
               "code":"fcl",
               "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693263.178.31045974032446",
               "persisted":true
            },
            "createdBy":{
               "id":2,
               "login":"li@integrator.com",
               "firstName":"Maria",
               "lastName":"Ribeiro",
               "email":"lilia.araujo@mitmynid.com",
               "active":true,
               "timezoneName":"Europe/Lisbon",
               "createdDate":"2016-01-01T00:00:00.000Z",
               "lastModifiedDate":"2022-03-08T15:01:24.518Z",
               "code":"00006f79-60f3-0130-b214-bc4004064005",
               "entity":{
                  "id":1,
                  "code":"0ea03506-c406-f5a0-e3e1-101e18bc607a",
                  "identificationId":"999999999",
                  "name":"Integrator Virtual, SA.",
                  "website":"www.integrator.com",
                  "adminIt":2,
                  "adminComercial":1102,
                  "active":true,
                  "urn":"urn:x-lsw:entity:pt:vintegrador",
                  "logoImage":"logoImage_0ea03506-c406-f5a0-e3e1-101e18bc607a_1643281393610.png",
                  "shortName":"Integrator Virtu",
                  "receiveDirectQuotes":true,
                  "addresses":[
                     
                  ],
                  "taxSystemId":1,
                  "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693261.954.0089868139353",
                  "persisted":true
               },
               "group":{
                  "id":1,
                  "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693262.51.81197227148858",
                  "persisted":true
               },
               "language":{
                  "id":1,
                  "name":"Português",
                  "code":"pt-pt",
                  "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693262.536.1482385786826",
                  "persisted":true
               },
               "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693261.608.2589089445182",
               "persisted":true
            },
            "createdDate":"2022-03-07T17:41:42.911Z",
            "lastModifiedBy":{
               "id":2,
               "login":"li@integrator.com",
               "firstName":"Maria",
               "lastName":"Ribeiro",
               "email":"lilia.araujo@mitmynid.com",
               "active":true,
               "timezoneName":"Europe/Lisbon",
               "createdDate":"2016-01-01T00:00:00.000Z",
               "lastModifiedDate":"2022-03-08T15:01:30.228Z",
               "code":"00006f79-60f3-0130-b214-bc4004064005",
               "entity":{
                  "id":1,
                  "code":"0ea03506-c406-f5a0-e3e1-101e18bc607a",
                  "identificationId":"999999999",
                  "name":"Integrator Virtual, SA.",
                  "website":"www.integrator.com",
                  "adminIt":2,
                  "adminComercial":1102,
                  "active":true,
                  "urn":"urn:x-lsw:entity:pt:vintegrador",
                  "logoImage":"logoImage_0ea03506-c406-f5a0-e3e1-101e18bc607a_1643281393610.png",
                  "shortName":"Integrator Virtu",
                  "receiveDirectQuotes":true,
                  "addresses":[
                     
                  ],
                  "taxSystemId":1,
                  "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693262.410.3937581365252",
                  "persisted":true
               },
               "group":{
                  "id":1,
                  "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693262.995.1751957729505",
                  "persisted":true
               },
               "language":{
                  "id":1,
                  "name":"Português",
                  "code":"pt-pt",
                  "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693262.11.919319638748584",
                  "persisted":true
               },
               "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693262.556.747559692639",
               "persisted":true
            },
            "lastModifiedDate":"2022-03-08T15:01:28.777Z",
            "template":false,
            "deliveryValue":10000,
            "userDefinedClauses":"USER DEFINED CLAUSES",
            "cmrReleaseOfficeCity":"Porto",
            "cmrReleaseOfficeCountry":"Portugal",
            "cmrReleaseOfficeLocation":"Vila Nova de Gaia",
            "requestedDateIssue":"2022-03-15T15:01:43+00:00",
            "carrierObs":"CARRIER OBSERVATIONS",
            "senderInstructions":"SENDER INSTRUCTIONS",
            "specialAgreements":"SPECIAL AGREEMENTS",
            "waybillNumber":"123456",
            "drivers":"Luís Silva\nFrancisco José",
            "registrationNumber":"34565",
            "truck":"44-AA-11",
            "truckType":"Box truck",
            "parties":[
               {
                  "code":"470c70c0-84fb-f341-c05c-c9b680b67910",
                  "cmrDocumentCode":"b650540f-db01-7064-0c7c-d0f3d110a217",
                  "entityCode":"0ea03506-c406-f5a0-e3e1-101e18bc607a",
                  "entityName":"Integrator Virtual, SA.",
                  "contactUserCode":"00006f79-60f3-0130-b214-bc4004064005",
                  "contactUserName":"Maria Ribeiro",
                  "address":"Rua de Salazares, 842",
                  "cityName":"Porto",
                  "postalZone":"4149-002",
                  "countryCode":"pt",
                  "email":"lilia.araujo@mitmynid.com",
                  "phone":"+351225322072",
                  "partyNotification":true,
                  "partyAuthType":{
                     "code":"SHIPPER",
                     "name":"Cargo owner",
                     "description":"The party that owns or sends the cargo",
                     "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693263.432.57837265139887",
                     "persisted":true
                  },
                  "createdBy":{
                     "id":2,
                     "login":"li@integrator.com",
                     "firstName":"Maria",
                     "lastName":"Ribeiro",
                     "email":"lilia.araujo@mitmynid.com",
                     "active":true,
                     "timezoneName":"Europe/Lisbon",
                     "createdDate":"2016-01-01T00:00:00.000Z",
                     "lastModifiedDate":"2022-03-08T15:01:32.139Z",
                     "code":"00006f79-60f3-0130-b214-bc4004064005",
                     "entity":{
                        "id":1,
                        "code":"0ea03506-c406-f5a0-e3e1-101e18bc607a",
                        "identificationId":"999999999",
                        "name":"Integrator Virtual, SA.",
                        "website":"www.integrator.com",
                        "adminIt":2,
                        "adminComercial":1102,
                        "active":true,
                        "urn":"urn:x-lsw:entity:pt:vintegrador",
                        "logoImage":"logoImage_0ea03506-c406-f5a0-e3e1-101e18bc607a_1643281393610.png",
                        "shortName":"Integrator Virtu",
                        "receiveDirectQuotes":true,
                        "addresses":[
                           
                        ],
                        "taxSystemId":1,
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693263.522.2875272138069",
                        "persisted":true
                     },
                     "group":{
                        "id":1,
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693263.71.27607096822516",
                        "persisted":true
                     },
                     "language":{
                        "id":1,
                        "name":"Português",
                        "code":"pt-pt",
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693263.800.2452490889796",
                        "persisted":true
                     },
                     "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693263.73.45006852217922",
                     "persisted":true
                  },
                  "createdDate":"2022-03-07T17:41:43.419Z",
                  "lastModifiedBy":{
                     "id":2,
                     "login":"li@integrator.com",
                     "firstName":"Maria",
                     "lastName":"Ribeiro",
                     "email":"lilia.araujo@mitmynid.com",
                     "active":true,
                     "timezoneName":"Europe/Lisbon",
                     "createdDate":"2016-01-01T00:00:00.000Z",
                     "lastModifiedDate":"2022-03-08T15:01:31.650Z",
                     "code":"00006f79-60f3-0130-b214-bc4004064005",
                     "entity":{
                        "id":1,
                        "code":"0ea03506-c406-f5a0-e3e1-101e18bc607a",
                        "identificationId":"999999999",
                        "name":"Integrator Virtual, SA.",
                        "website":"www.integrator.com",
                        "adminIt":2,
                        "adminComercial":1102,
                        "active":true,
                        "urn":"urn:x-lsw:entity:pt:vintegrador",
                        "logoImage":"logoImage_0ea03506-c406-f5a0-e3e1-101e18bc607a_1643281393610.png",
                        "shortName":"Integrator Virtu",
                        "receiveDirectQuotes":true,
                        "addresses":[
                           
                        ],
                        "taxSystemId":1,
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693266.421.1829797013121",
                        "persisted":true
                     },
                     "group":{
                        "id":1,
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693266.99.21957370078576",
                        "persisted":true
                     },
                     "language":{
                        "id":1,
                        "name":"Português",
                        "code":"pt-pt",
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693266.786.858497172564",
                        "persisted":true
                     },
                     "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693263.196.23555410351187",
                     "persisted":true
                  },
                  "lastModifiedDate":"2022-03-07T17:41:43.419Z",
                  "entityIdentification":"999999999",
                  "entityIdentificationCountryCode":"pt",
                  "auxEntity":{
                     "code":"0ea03506-c406-f5a0-e3e1-101e18bc607a",
                     "name":"Integrator Virtual, SA."
                  },
                  "auxContactUser":{
                     "code":"00006f79-60f3-0130-b214-bc4004064005",
                     "firstName":"Maria Ribeiro",
                     "email":"lilia.araujo@mitmynid.com"
                  },
                  "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693263.466.5139967992704",
                  "persisted":true
               },
               {
                  "code":"b1cb5b39-5b6e-0868-a20d-70274c01f7f3",
                  "cmrDocumentCode":"b650540f-db01-7064-0c7c-d0f3d110a217",
                  "entityCode":"4f6c9a4b-4331-8059-6ebc-b0ae0bc74601",
                  "entityName":"Transwhite Transportes, LDA",
                  "address":"Rua Inácio Perdigão, n13",
                  "cityName":"Caldas da Rainha",
                  "postalZone":"2500-755",
                  "countryCode":"pt",
                  "phone":"262845469",
                  "partyNotification":false,
                  "partyAuthType":{
                     "code":"CARRIER",
                     "name":"Carrier",
                     "description":"The Carrier Party",
                     "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693271.679.5044009791968",
                     "persisted":true
                  },
                  "createdBy":{
                     "id":2,
                     "login":"li@integrator.com",
                     "firstName":"Maria",
                     "lastName":"Ribeiro",
                     "email":"lilia.araujo@mitmynid.com",
                     "active":true,
                     "timezoneName":"Europe/Lisbon",
                     "createdDate":"2016-01-01T00:00:00.000Z",
                     "lastModifiedDate":"2022-03-08T15:01:32.274Z",
                     "code":"00006f79-60f3-0130-b214-bc4004064005",
                     "entity":{
                        "id":1,
                        "code":"0ea03506-c406-f5a0-e3e1-101e18bc607a",
                        "identificationId":"999999999",
                        "name":"Integrator Virtual, SA.",
                        "website":"www.integrator.com",
                        "adminIt":2,
                        "adminComercial":1102,
                        "active":true,
                        "urn":"urn:x-lsw:entity:pt:vintegrador",
                        "logoImage":"logoImage_0ea03506-c406-f5a0-e3e1-101e18bc607a_1643281393610.png",
                        "shortName":"Integrator Virtu",
                        "receiveDirectQuotes":true,
                        "addresses":[
                           
                        ],
                        "taxSystemId":1,
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693271.166.0732899327367",
                        "persisted":true
                     },
                     "group":{
                        "id":1,
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693271.950.9801873577717",
                        "persisted":true
                     },
                     "language":{
                        "id":1,
                        "name":"Português",
                        "code":"pt-pt",
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693271.949.0640021524143",
                        "persisted":true
                     },
                     "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693271.728.5465077670854",
                     "persisted":true
                  },
                  "createdDate":"2022-03-07T17:41:43.771Z",
                  "lastModifiedBy":{
                     "id":2,
                     "login":"li@integrator.com",
                     "firstName":"Maria",
                     "lastName":"Ribeiro",
                     "email":"lilia.araujo@mitmynid.com",
                     "active":true,
                     "timezoneName":"Europe/Lisbon",
                     "createdDate":"2016-01-01T00:00:00.000Z",
                     "lastModifiedDate":"2022-03-08T15:01:32.203Z",
                     "code":"00006f79-60f3-0130-b214-bc4004064005",
                     "entity":{
                        "id":1,
                        "code":"0ea03506-c406-f5a0-e3e1-101e18bc607a",
                        "identificationId":"999999999",
                        "name":"Integrator Virtual, SA.",
                        "website":"www.integrator.com",
                        "adminIt":2,
                        "adminComercial":1102,
                        "active":true,
                        "urn":"urn:x-lsw:entity:pt:vintegrador",
                        "logoImage":"logoImage_0ea03506-c406-f5a0-e3e1-101e18bc607a_1643281393610.png",
                        "shortName":"Integrator Virtu",
                        "receiveDirectQuotes":true,
                        "addresses":[
                           
                        ],
                        "taxSystemId":1,
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693271.899.3767573010191",
                        "persisted":true
                     },
                     "group":{
                        "id":1,
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693271.151.34348032103995",
                        "persisted":true
                     },
                     "language":{
                        "id":1,
                        "name":"Português",
                        "code":"pt-pt",
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693271.730.0330867265075",
                        "persisted":true
                     },
                     "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693271.205.31858851119662",
                     "persisted":true
                  },
                  "lastModifiedDate":"2022-03-07T17:41:43.771Z",
                  "entityIdentification":"506996395",
                  "entityIdentificationCountryCode":"pt",
                  "auxEntity":{
                     "code":"4f6c9a4b-4331-8059-6ebc-b0ae0bc74601",
                     "name":"Transwhite Transportes, LDA"
                  },
                  "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693271.740.134539352189",
                  "persisted":true
               },
               {
                  "code":"c85969b6-7f07-64b2-0d70-070c08faf341",
                  "cmrDocumentCode":"b650540f-db01-7064-0c7c-d0f3d110a217",
                  "entityCode":"d1004fdf-5bc0-0210-baad-606236baa5f3",
                  "entityName":"Sonae Arauco Portugal, S.A.",
                  "address":"Lugar do Espido - Via Norte Apartado 1129",
                  "cityName":"MAIA",
                  "postalZone":"4470-177",
                  "countryCode":"pt",
                  "phone":"229360138",
                  "partyAuthType":{
                     "code":"CONSIGNEE",
                     "name":"Consignee",
                     "description":"",
                     "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751725206.711.830552579746",
                     "persisted":true
                  },
                  "createdBy":{
                     "id":2,
                     "login":"li@integrator.com",
                     "firstName":"Maria",
                     "lastName":"Ribeiro",
                     "email":"lilia.araujo@mitmynid.com",
                     "active":true,
                     "timezoneName":"Europe/Lisbon",
                     "createdDate":"2016-01-01T00:00:00.000Z",
                     "lastModifiedDate":"2022-03-08T15:01:32.420Z",
                     "code":"00006f79-60f3-0130-b214-bc4004064005",
                     "entity":{
                        "id":1,
                        "code":"0ea03506-c406-f5a0-e3e1-101e18bc607a",
                        "identificationId":"999999999",
                        "name":"Integrator Virtual, SA.",
                        "website":"www.integrator.com",
                        "adminIt":2,
                        "adminComercial":1102,
                        "active":true,
                        "urn":"urn:x-lsw:entity:pt:vintegrador",
                        "logoImage":"logoImage_0ea03506-c406-f5a0-e3e1-101e18bc607a_1643281393610.png",
                        "shortName":"Integrator Virtu",
                        "receiveDirectQuotes":true,
                        "addresses":[
                           
                        ],
                        "taxSystemId":1,
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693275.790.5014936476917",
                        "persisted":true
                     },
                     "group":{
                        "id":1,
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693275.440.0037930646581",
                        "persisted":true
                     },
                     "language":{
                        "id":1,
                        "name":"Português",
                        "code":"pt-pt",
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693275.622.5456752778744",
                        "persisted":true
                     },
                     "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693274.711.2550308569771",
                     "persisted":true
                  },
                  "createdDate":"2022-03-07T17:41:43.796Z",
                  "lastModifiedBy":{
                     "id":2,
                     "login":"li@integrator.com",
                     "firstName":"Maria",
                     "lastName":"Ribeiro",
                     "email":"lilia.araujo@mitmynid.com",
                     "active":true,
                     "timezoneName":"Europe/Lisbon",
                     "createdDate":"2016-01-01T00:00:00.000Z",
                     "lastModifiedDate":"2022-03-08T15:01:32.342Z",
                     "code":"00006f79-60f3-0130-b214-bc4004064005",
                     "entity":{
                        "id":1,
                        "code":"0ea03506-c406-f5a0-e3e1-101e18bc607a",
                        "identificationId":"999999999",
                        "name":"Integrator Virtual, SA.",
                        "website":"www.integrator.com",
                        "adminIt":2,
                        "adminComercial":1102,
                        "active":true,
                        "urn":"urn:x-lsw:entity:pt:vintegrador",
                        "logoImage":"logoImage_0ea03506-c406-f5a0-e3e1-101e18bc607a_1643281393610.png",
                        "shortName":"Integrator Virtu",
                        "receiveDirectQuotes":true,
                        "addresses":[
                           
                        ],
                        "taxSystemId":1,
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693275.541.6260719237164",
                        "persisted":true
                     },
                     "group":{
                        "id":1,
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693275.262.83407448787955",
                        "persisted":true
                     },
                     "language":{
                        "id":1,
                        "name":"Português",
                        "code":"pt-pt",
                        "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693275.952.1607081909186",
                        "persisted":true
                     },
                     "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693275.754.6424208754958",
                     "persisted":true
                  },
                  "lastModifiedDate":"2022-03-07T17:41:43.796Z",
                  "entityIdentification":"500058580",
                  "entityIdentificationCountryCode":"pt",
                  "actionList":"update",
                  "auxEntity":{
                     "code":"d1004fdf-5bc0-0210-baad-606236baa5f3",
                     "name":"Sonae Arauco Portugal, S.A."
                  },
                  "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693273.221.6360056823918",
                  "persisted":true
               },
               {
                  "cmrDocumentCode":"b650540f-db01-7064-0c7c-d0f3d110a217",
                  "entityCode":"bc603a0f-da0e-50c4-06f7-a0e3a1101e28",
                  "entityName":"Client Virtual, SA.",
                  "address":"Avenida Dr. Antunes Guimarães",
                  "cityName":"Porto",
                  "postalZone":"4100-081",
                  "countryCode":"pt",
                  "phone":"+351 222 333 444",
                  "partyAuthType":{
                     "id":11,
                     "code":"VIEW",
                     "name":"Authorized to view",
                     "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693341.45.26339326418864"
                  },
                  "entityIdentification":"543123987",
                  "entityIdentificationCountryCode":"pt",
                  "actionList":"create",
                  "auxEntity":{
                     "id":2,
                     "code":"bc603a0f-da0e-50c4-06f7-a0e3a1101e28",
                     "identificationId":"543123987",
                     "name":"Client Virtual, SA.",
                     "website":"www.virtual.io",
                     "adminIt":3,
                     "adminComercial":3,
                     "active":true,
                     "urn":"urn:x-lsw:entity:pt:vclient",
                     "logoImage":"https://localhost/api/resources/v1/public/bc603a0f-da0e-50c4-06f7-a0e3a1101e28/logoImagebc603a0f-da0e-50c4-06f7-a0e3a1101e28.png",
                     "shortName":"Client Virtual,",
                     "receiveDirectQuotes":true,
                     "addresses":[
                        {
                           "code":"2",
                           "designation":"Main",
                           "addressContactsType":{
                              "id":1,
                              "name":"Main",
                              "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751746018.94.41851971235218"
                           },
                           "addressLine1":"Avenida Dr. Antunes Guimarães",
                           "addressLine2":"851",
                           "addressLine3":null,
                           "cityName":"Porto",
                           "postalZone":"4100-081",
                           "phone1":"+351 222 333 444",
                           "phone2":null,
                           "country":{
                              "id":178,
                              "name":"Portugal",
                              "code":"pt",
                              "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751746018.587.9276633582843"
                           },
                           "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751746017.276.49066932451024"
                        }
                     ],
                     "taxSystemId":1,
                     "defaultCurrencyId":49,
                     "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751746017.337.1481921230643",
                     "persisted":true
                  },
                  "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751737067.659.3342007452659"
               }
            ],
            "cargo":[
               {
                  "actionList":null,
                  "code":"70c0de0f-4371-4054-19b6-002607502708",
                  "cmrDocumentCode":"b650540f-db01-7064-0c7c-d0f3d110a217",
                  "versionNumber":31,
                  "identification":"232435",
                  "orderSequence":2,
                  "lastNotificationSubmissionDate":null,
                  "createdBy":{
                     "id":2,
                     "login":"li@integrator.com",
                     "firstName":"Maria",
                     "lastName":"Ribeiro",
                     "email":"lilia.araujo@mitmynid.com",
                     "active":true,
                     "timezoneName":"Europe/Lisbon",
                     "createdDate":"2016-01-01T00:00:00.000Z",
                     "lastModifiedDate":"2022-03-08T15:01:30.309Z",
                     "code":"00006f79-60f3-0130-b214-bc4004064005",
                     "entity":{
                        "id":1,
                        "code":"0ea03506-c406-f5a0-e3e1-101e18bc607a",
                        "identificationId":"999999999",
                        "name":"Integrator Virtual, SA.",
                        "website":"www.integrator.com",
                        "adminIt":2,
                        "adminComercial":1102,
                        "active":true,
                        "urn":"urn:x-lsw:entity:pt:vintegrador",
                        "logoImage":"logoImage_0ea03506-c406-f5a0-e3e1-101e18bc607a_1643281393610.png",
                        "shortName":"Integrator Virtu",
                        "receiveDirectQuotes":true,
                        "registrationType":"C",
                        "taxSystemId":1
                     },
                     "group":{
                        "id":1,
                        "active":false
                     },
                     "language":{
                        "id":1,
                        "code":"pt-pt",
                        "name":"Português",
                        "active":true
                     }
                  },
                  "createdDate":"2022-03-07T17:41:44.326Z",
                  "lastModifiedBy":{
                     "id":2,
                     "login":"li@integrator.com",
                     "firstName":"Maria",
                     "lastName":"Ribeiro",
                     "email":"lilia.araujo@mitmynid.com",
                     "active":true,
                     "timezoneName":"Europe/Lisbon",
                     "createdDate":"2016-01-01T00:00:00.000Z",
                     "lastModifiedDate":"2022-03-08T15:01:30.814Z",
                     "code":"00006f79-60f3-0130-b214-bc4004064005",
                     "entity":{
                        "id":1,
                        "code":"0ea03506-c406-f5a0-e3e1-101e18bc607a",
                        "identificationId":"999999999",
                        "name":"Integrator Virtual, SA.",
                        "website":"www.integrator.com",
                        "adminIt":2,
                        "adminComercial":1102,
                        "active":true,
                        "urn":"urn:x-lsw:entity:pt:vintegrador",
                        "logoImage":"logoImage_0ea03506-c406-f5a0-e3e1-101e18bc607a_1643281393610.png",
                        "shortName":"Integrator Virtu",
                        "receiveDirectQuotes":true,
                        "registrationType":"C",
                        "taxSystemId":1
                     },
                     "group":{
                        "id":1,
                        "active":false
                     },
                     "language":{
                        "id":1,
                        "code":"pt-pt",
                        "name":"Português",
                        "active":true
                     }
                  },
                  "lastModifiedDate":"2022-03-07T18:21:27.050Z",
                  "packageCount":null,
                  "packageType":null,
                  "hs":null,
                  "description":null,
                  "marksAndNumbers":null,
                  "grossWeight":null,
                  "grossWeightUnit":{
                     "id":1,
                     "code":"KGM",
                     "name":"kilogram",
                     "active":true
                  },
                  "grossVolume":null,
                  "grossVolumeUnit":{
                     "id":1,
                     "code":"MTQ",
                     "name":"cubic metre",
                     "active":true
                  },
                  "methodOfPacking":null,
                  "natureOfGoods":null,
                  "fileName":null,
                  "jcrDocumentFileName":null,
                  "jcrDocumentUuid":null,
                  "fileData":null,
                  "packageTypeName":""
               },
               {
                  "actionList":null,
                  "code":"e70570c0-87e0-f301-405e-19b620360850",
                  "cmrDocumentCode":"b650540f-db01-7064-0c7c-d0f3d110a217",
                  "versionNumber":31,
                  "identification":"232434",
                  "orderSequence":1,
                  "lastNotificationSubmissionDate":null,
                  "createdBy":{
                     "id":2,
                     "login":"li@integrator.com",
                     "firstName":"Maria",
                     "lastName":"Ribeiro",
                     "email":"lilia.araujo@mitmynid.com",
                     "active":true,
                     "timezoneName":"Europe/Lisbon",
                     "createdDate":"2016-01-01T00:00:00.000Z",
                     "lastModifiedDate":"2022-03-08T15:01:30.910Z",
                     "code":"00006f79-60f3-0130-b214-bc4004064005",
                     "entity":{
                        "id":1,
                        "code":"0ea03506-c406-f5a0-e3e1-101e18bc607a",
                        "identificationId":"999999999",
                        "name":"Integrator Virtual, SA.",
                        "website":"www.integrator.com",
                        "adminIt":2,
                        "adminComercial":1102,
                        "active":true,
                        "urn":"urn:x-lsw:entity:pt:vintegrador",
                        "logoImage":"logoImage_0ea03506-c406-f5a0-e3e1-101e18bc607a_1643281393610.png",
                        "shortName":"Integrator Virtu",
                        "receiveDirectQuotes":true,
                        "registrationType":"C",
                        "taxSystemId":1
                     },
                     "group":{
                        "id":1,
                        "active":false
                     },
                     "language":{
                        "id":1,
                        "code":"pt-pt",
                        "name":"Português",
                        "active":true
                     }
                  },
                  "createdDate":"2022-03-07T17:41:44.350Z",
                  "lastModifiedBy":{
                     "id":2,
                     "login":"li@integrator.com",
                     "firstName":"Maria",
                     "lastName":"Ribeiro",
                     "email":"lilia.araujo@mitmynid.com",
                     "active":true,
                     "timezoneName":"Europe/Lisbon",
                     "createdDate":"2016-01-01T00:00:00.000Z",
                     "lastModifiedDate":"2022-03-08T15:01:31.563Z",
                     "code":"00006f79-60f3-0130-b214-bc4004064005",
                     "entity":{
                        "id":1,
                        "code":"0ea03506-c406-f5a0-e3e1-101e18bc607a",
                        "identificationId":"999999999",
                        "name":"Integrator Virtual, SA.",
                        "website":"www.integrator.com",
                        "adminIt":2,
                        "adminComercial":1102,
                        "active":true,
                        "urn":"urn:x-lsw:entity:pt:vintegrador",
                        "logoImage":"logoImage_0ea03506-c406-f5a0-e3e1-101e18bc607a_1643281393610.png",
                        "shortName":"Integrator Virtu",
                        "receiveDirectQuotes":true,
                        "registrationType":"C",
                        "taxSystemId":1
                     },
                     "group":{
                        "id":1,
                        "active":false
                     },
                     "language":{
                        "id":1,
                        "code":"pt-pt",
                        "name":"Português",
                        "active":true
                     }
                  },
                  "lastModifiedDate":"2022-03-07T18:21:27.050Z",
                  "packageCount":1,
                  "packageType":{
                     "id":8,
                     "code":"8",
                     "name":"Palletized",
                     "fcl":true,
                     "lcl":true,
                     "bulk":false,
                     "custom":true,
                     "express":true,
                     "movings":false,
                     "air":true,
                     "roro":false,
                     "ftl":true,
                     "ltl":true,
                     "broker":true,
                     "active":true
                  },
                  "hs":null,
                  "description":"DESCRIPTION",
                  "marksAndNumbers":"MARKS AND NUMBERS",
                  "grossWeight":1000,
                  "grossWeightUnit":{
                     "id":1,
                     "code":"KGM",
                     "name":"kilogram",
                     "active":true
                  },
                  "grossVolume":10000,
                  "grossVolumeUnit":{
                     "id":1,
                     "code":"MTQ",
                     "name":"cubic metre",
                     "active":true
                  },
                  "methodOfPacking":"METHOD OF PACKING",
                  "natureOfGoods":"NATURE OF GOODS",
                  "fileName":null,
                  "jcrDocumentFileName":null,
                  "jcrDocumentUuid":null,
                  "fileData":null,
                  "packageTypeName":"Palletized"
               }
            ],
            "freightCharges":[
               {
                  "code":"870370d0-8500-f321-5051-19b660660190",
                  "cmrDocumentCode":"b650540f-db01-7064-0c7c-d0f3d110a217",
                  "chargeType":{
                     "name":"Basic freight",
                     "code":"22",
                     "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693276.919.3318220769805",
                     "persisted":true
                  },
                  "freightTerm":{
                     "name":"Colect",
                     "code":"COLECT",
                     "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693276.635.4709466067511",
                     "persisted":true
                  },
                  "payer":{
                     "name":"Consignee",
                     "code":"CONSIGNEE",
                     "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693276.276.29959293978715",
                     "persisted":true
                  },
                  "freightChargeValue":1000,
                  "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693276.996.4437691007456",
                  "persisted":true
               }
            ],
            "clientUUID":"e89fd2fb-987d-42b8-acf9-a983147878ef-1646751693260.331.75336052181945",
            "persisted":true,
            "currency":{
               "code":"EUR"
            }
         }
    ]

    return bigJson;
}

export const getJson = () => {

    const Json = [
        {
            "content":[
               {
                  "code":"b650540f-db01-7064-0c7c-d0f3d110a217",
                  "versionNumber":32,
                  "shipmentCode":null,
                  "bookingCode":"c0c02fb5-7901-b0d3-1370-780c6cd0c351",
                  "carrierBookingReference":"CMR0002",
                  "cmrReference":null,
                  "origin":"Porto",
                  "destination":"Barcelona",
                  "loadingDate":"2022-03-02T15:30:54.000Z",
                  "deliveryDate":"2022-03-02T15:30:56.000Z",
                  "approvalByCode":null,
                  "approvalByEntityCode":null,
                  "approvalBySignature":null,
                  "approvalDate":null,
                  "createdBy":"00006f79-60f3-0130-b214-bc4004064005",
                  "createdDate":"2022-03-08T15:02:39.022Z",
                  "lastModifiedBy":"00006f79-60f3-0130-b214-bc4004064005",
                  "lastModifiedDate":"2022-03-08T15:48:16.451Z",
                  "template":false
               },
               {
                  "code":"31e0551f-5b6b-0360-8508-70570cdbd0f3",
                  "versionNumber":3,
                  "shipmentCode":null,
                  "bookingCode":"060040d1-8920-0301-3002-12b7000d0300",
                  "carrierBookingReference":null,
                  "cmrReference":null,
                  "origin":"Porto",
                  "destination":"Lisboa, Portugal",
                  "loadingDate":null,
                  "deliveryDate":null,
                  "approvalByCode":null,
                  "approvalByEntityCode":null,
                  "approvalBySignature":null,
                  "approvalDate":null,
                  "createdBy":"00006f79-60f3-0130-b214-bc4004064005",
                  "createdDate":"2022-03-08T09:53:39.123Z",
                  "lastModifiedBy":"00006f79-60f3-0130-b214-bc4004064005",
                  "lastModifiedDate":"2022-03-08T15:48:16.452Z",
                  "template":false
               }
            ],
            "last":true,
            "totalPages":1,
            "totalElements":2,
            "size":10,
            "number":0,
            "sort":[
               {
                  "direction":"DESC",
                  "property":"created_date",
                  "ignoreCase":false,
                  "nullHandling":"NATIVE",
                  "ascending":false,
                  "descending":true
               }
            ],
            "numberOfElements":2,
            "first":true
         }
        
    ]

    return Json;
}

