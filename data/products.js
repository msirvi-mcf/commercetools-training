// This file is exported from commercetools as an example, this can be any product file, map accordingly
const products = [
    {
        "id": "6f802eea-762f-4100-9e03-3f75105c30f6",
        "version": 19,
        "productType": {
            "typeId": "product-type",
            "id": "60dee9c4-a696-479a-9995-fd9c5e8e0f6f"
        },
        "name": {
            "en": "jeans Jacob Cohen grey",
            "de": "jeans Jacob Cohen grau"
        },
        "categories": [
            {
                "typeId": "category",
                "id": "9ae89495-b7d6-4f62-9c14-34a7f62689dd"
            },
            {
                "typeId": "category",
                "id": "8c8a69e8-60e1-4b46-b105-6917ee7e66cf"
            }
        ],
        "categoryOrderHints": {},
        "slug": {
            "en": "jacob-cohen-jeans-pw746-grey",
            "de": "jacob-cohen-jeans-pw746-grau"
        },
        "masterVariant": {
            "id": 1,
            "sku": "M0E20000000DUW0",
            "key": "M0E20000000DUW0",
            "prices": [
                {
                    "id": "609e1f37-2044-4fe3-b2d2-2eaa0fcea1f0",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 28125,
                        "fractionDigits": 2
                    }
                },
                {
                    "id": "fba1b346-7341-4daa-8939-d1d6bda2d145",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 18443,
                        "fractionDigits": 2
                    },
                    "customerGroup": {
                        "typeId": "customer-group",
                        "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                    }
                },
                {
                    "id": "8ce04da5-efd5-4a38-be41-582735b33ae3",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "USD",
                        "centAmount": 28125,
                        "fractionDigits": 2
                    },
                    "country": "US"
                },
                {
                    "id": "36fca4f6-a535-4d69-8d23-eb6b156e81ca",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "USD",
                        "centAmount": 18443,
                        "fractionDigits": 2
                    },
                    "customerGroup": {
                        "typeId": "customer-group",
                        "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                    }
                },
                {
                    "id": "b73047e6-906e-416d-94c3-c1f0f86eddb9",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 22500,
                        "fractionDigits": 2
                    },
                    "country": "DE"
                },
                {
                    "id": "6172fd13-23e2-41f4-be7b-8c1456275e33",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 22500,
                        "fractionDigits": 2
                    },
                    "country": "IT"
                },
                {
                    "id": "4cf9d661-353e-42ec-8a3b-01d4ea8772ea",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 22500,
                        "fractionDigits": 2
                    },
                    "country": "GB"
                },
                {
                    "id": "d1c66368-9fe5-4d68-91c5-f0e4ad06e28f",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 23175,
                        "fractionDigits": 2
                    },
                    "country": "DE",
                    "channel": {
                        "typeId": "channel",
                        "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                    }
                },
                {
                    "id": "958feca1-ef03-4573-b868-960f1efae5ab",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 25875,
                        "fractionDigits": 2
                    },
                    "channel": {
                        "typeId": "channel",
                        "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                    }
                },
                {
                    "id": "8c7aa290-c714-418e-95a3-7f67f9c0b77f",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 24525,
                        "fractionDigits": 2
                    },
                    "country": "DE",
                    "channel": {
                        "typeId": "channel",
                        "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                    }
                },
                {
                    "id": "f3fef55a-730c-4bd8-8d40-9095e2fa9fc8",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 24525,
                        "fractionDigits": 2
                    },
                    "country": "DE",
                    "channel": {
                        "typeId": "channel",
                        "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                    }
                },
                {
                    "id": "6edd375e-b17b-4212-9c03-a9ee33395a29",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 22725,
                        "fractionDigits": 2
                    },
                    "country": "DE",
                    "channel": {
                        "typeId": "channel",
                        "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                    }
                },
                {
                    "id": "b817fa62-dd12-4b55-b737-c51e3c151665",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "USD",
                        "centAmount": 23175,
                        "fractionDigits": 2
                    },
                    "country": "US",
                    "channel": {
                        "typeId": "channel",
                        "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                    }
                },
                {
                    "id": "34608162-7de9-4705-b905-5369c77de726",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "USD",
                        "centAmount": 25875,
                        "fractionDigits": 2
                    },
                    "channel": {
                        "typeId": "channel",
                        "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                    }
                },
                {
                    "id": "c7f65b1d-47f4-498f-8839-272bdebe2a8f",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "USD",
                        "centAmount": 24525,
                        "fractionDigits": 2
                    },
                    "country": "US",
                    "channel": {
                        "typeId": "channel",
                        "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                    }
                },
                {
                    "id": "c7b4a6e7-c079-4217-829f-d86e4a254c66",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "USD",
                        "centAmount": 24525,
                        "fractionDigits": 2
                    },
                    "country": "US",
                    "channel": {
                        "typeId": "channel",
                        "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                    }
                },
                {
                    "id": "83dc6f83-b68e-41b0-a4db-ba1f3b8ce81b",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "USD",
                        "centAmount": 22725,
                        "fractionDigits": 2
                    },
                    "country": "US",
                    "channel": {
                        "typeId": "channel",
                        "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                    }
                }
            ],
            "images": [
                {
                    "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                    "dimensions": {
                        "w": 0,
                        "h": 0
                    }
                }
            ],
            "attributes": [
                {
                    "name": "articleNumberManufacturer",
                    "value": "PW746 SUMM 8131 003 3996"
                },
                {
                    "name": "articleNumberMax",
                    "value": "78916"
                },
                {
                    "name": "matrixId",
                    "value": "M0E20000000DUW0"
                },
                {
                    "name": "baseId",
                    "value": "78916"
                },
                {
                    "name": "designer",
                    "value": {
                        "key": "jacobcohen",
                        "label": "Jacob Cohen"
                    }
                },
                {
                    "name": "madeInItaly",
                    "value": {
                        "key": "yes",
                        "label": "yes"
                    }
                },
                {
                    "name": "commonSize",
                    "value": {
                        "key": "xxs",
                        "label": "XXS"
                    }
                },
                {
                    "name": "size",
                    "value": "24"
                },
                {
                    "name": "color",
                    "value": {
                        "key": "grey",
                        "label": {
                            "de": "grau",
                            "en": "grey",
                            "it": "grigio"
                        }
                    }
                },
                {
                    "name": "colorFreeDefinition",
                    "value": {
                        "en": "grey",
                        "de": "grau"
                    }
                },
                {
                    "name": "style",
                    "value": {
                        "key": "sporty",
                        "label": "sporty"
                    }
                },
                {
                    "name": "gender",
                    "value": {
                        "key": "women",
                        "label": "Damen"
                    }
                },
                {
                    "name": "season",
                    "value": "s15"
                }
            ],
            "assets": [],
            "availability": {
                "isOnStock": true,
                "availableQuantity": 92,
                "version": 17,
                "id": "082b74bd-a880-49e9-9db0-7b106f4ced55"
            }
        },
        "variants": [
            {
                "id": 2,
                "sku": "M0E20000000DUW1",
                "key": "M0E20000000DUW1",
                "prices": [
                    {
                        "id": "6a1b95dc-b7bb-4d9f-bf84-07f1bd784cb3",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "f92518b7-b2be-412a-8197-f01bd33b2f2e",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "99712203-4f12-4309-9742-cfec364f781d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "9479fbf2-9057-460f-aed1-3a6c3ec43987",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "f944ef7e-4566-4c9e-ac66-9bae1d3ebb7d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "ddf3412b-0b08-4864-8aef-5400bb199140",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "25f2fce2-e4b1-49bc-ae35-5d22dbe487e3",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "c772f5fc-d312-43e8-8a75-06a974facfa8",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 24525,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "1c51fe24-ebd0-4b59-a218-1859b1dca544",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 26438,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "d7ac717a-800c-4e49-bb27-5268e61677ba",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 21375,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "12ae2c53-7aed-48fa-9a32-852dd7d61431",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 20250,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "9750250e-fdd5-4056-963e-5701960b2e54",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 24075,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "e8ffea3c-907d-42cd-ae10-be59948b1d7d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 24525,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "b028e096-3616-4179-a57c-3770e0543ce8",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 26438,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "805ac1e8-4880-48a2-91b2-4a88de30ab80",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 21375,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "b9599899-463b-4626-803d-e499777fc060",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 20250,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "d252dce1-b994-4b1b-a899-8ce430773c97",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 24075,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "PW746 SUMM 8131 003 3996"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "78916"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000DUW1"
                    },
                    {
                        "name": "baseId",
                        "value": "78916"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "jacobcohen",
                            "label": "Jacob Cohen"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "yes",
                            "label": "yes"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "xxs",
                            "label": "XXS"
                        }
                    },
                    {
                        "name": "size",
                        "value": "25"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "grey",
                            "label": {
                                "de": "grau",
                                "en": "grey",
                                "it": "grigio"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "grey",
                            "de": "grau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "women",
                            "label": "Damen"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            },
            {
                "id": 3,
                "sku": "M0E20000000DUW2",
                "key": "M0E20000000DUW2",
                "prices": [
                    {
                        "id": "0f5bc384-c936-4530-808f-6859f38e2bd3",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "7b382ff4-9bf1-4427-8d56-5f2de9d35d1c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "42300cd6-a999-4662-8ce4-9c04465c4f4b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "6e48d420-b44c-4aab-80d6-e69ffce089ae",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "41974e1a-00f2-419d-b5e3-22cb980eaba0",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "cb340462-500a-4009-838b-a9043155e7fc",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "91400ad0-3498-4e8e-bb71-5d45709039ca",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "9afeed0e-f1d0-48a6-8b10-b938c8fa9cd5",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 24750,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "e336d506-ed07-426d-989a-6d656eedd534",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "fbb88084-f48c-47ef-b9d2-b2dc565894c1",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 24075,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "588a35a3-f94f-408b-99bf-2472e77da363",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 21600,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "5a1d4e1c-e3ac-4517-a49a-90a7f5791a75",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22050,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "b6ac43ff-d60e-434e-98e1-8e49adac0eb2",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 24750,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "a550af89-80da-465c-8c89-4eda3684c94b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "f38eb505-ec0a-4981-88d7-04a50028e241",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 24075,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "75380219-35ef-4ee3-b38d-b73f02a53ff6",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 21600,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "4769240d-7f31-4e5f-aeea-c8eb16e5a920",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 22050,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "PW746 SUMM 8131 003 3996"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "78916"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000DUW2"
                    },
                    {
                        "name": "baseId",
                        "value": "78916"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "jacobcohen",
                            "label": "Jacob Cohen"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "yes",
                            "label": "yes"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "xs",
                            "label": "XS"
                        }
                    },
                    {
                        "name": "size",
                        "value": "26"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "grey",
                            "label": {
                                "de": "grau",
                                "en": "grey",
                                "it": "grigio"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "grey",
                            "de": "grau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "women",
                            "label": "Damen"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    },
                    {
                        "name": "isOnStock",
                        "value": true
                    }
                ],
                "assets": []
            },
            {
                "id": 4,
                "sku": "M0E20000000DUW3",
                "key": "M0E20000000DUW3",
                "prices": [
                    {
                        "id": "2f198913-622a-404c-b068-e67079b10f46",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "d6db1a6f-4097-43b6-aae6-e720e2f68016",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "a36cbdc4-e8a1-4b90-a17b-76d07176e72b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "b4432c88-170d-4eb8-8fd8-781f1cbda3d9",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "c1735cb2-a8d9-4290-9fcf-1bbefc94172a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "577d920b-91b7-410f-a276-1d591a42ea77",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "a5eb57f2-4540-4584-9d77-9b7c7e3a5090",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "c2f8dd6c-1725-4ce3-ae35-71b22461eb4c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 21600,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "d8c7e1e8-aa2c-4035-b360-dc7def8e4555",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 25594,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "f98a7fa6-6d59-427c-8d2c-5d4058ea6fd2",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 20700,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "13f132e5-d861-4ef5-8f5b-eaf15db3a1ba",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 24300,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "a04d0ea3-c1df-4162-964f-214cc3e38435",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 23625,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "01e26fbc-311e-4070-8a9c-702ac3c21c29",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 21600,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "f5a82b88-0ef6-4db5-9840-8419e6eab7b4",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 25594,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "1f1dbecc-5579-44c7-92c3-74d3c42c4c62",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 20700,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "c5d65fd8-d612-4550-9a3a-51be92afb493",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 24300,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "1366dd25-2441-4f11-9d5c-94bafd9dcf23",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 23625,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "PW746 SUMM 8131 003 3996"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "78916"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000DUW3"
                    },
                    {
                        "name": "baseId",
                        "value": "78916"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "jacobcohen",
                            "label": "Jacob Cohen"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "yes",
                            "label": "yes"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "xs",
                            "label": "XS"
                        }
                    },
                    {
                        "name": "size",
                        "value": "27"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "grey",
                            "label": {
                                "de": "grau",
                                "en": "grey",
                                "it": "grigio"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "grey",
                            "de": "grau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "women",
                            "label": "Damen"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            },
            {
                "id": 5,
                "sku": "M0E20000000DUW4",
                "key": "M0E20000000DUW4",
                "prices": [
                    {
                        "id": "0914531a-1020-48c5-9cef-d4fda83b8ea3",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "958e3219-55a5-47c3-aa4f-664c50303984",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "e44b27fc-549e-4daa-8bf4-f96e0384749c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "8f9dbf45-28a9-4b8e-8666-1445c3921b1a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "2720e9dc-7cc3-447e-b9e2-80f80bc649f6",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "abf54c16-1479-456b-8eab-451f2a14b625",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "8262adcf-c796-403d-9641-10240e18d2d8",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "db352e3a-8b1a-462f-b66e-f1ba7110db20",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 24300,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "03c09e09-346c-44c4-9671-82981ec5dbdb",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 27281,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "73619817-b910-4b0e-a3af-29f821e84f6c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 21150,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "e1d3b69f-d2bb-4609-b3c6-c9f85528b3d8",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 21150,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "757791ef-6ea7-4c08-b258-40cfae4656e6",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 23850,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "5a5bbfe8-87f6-497b-b996-dcc93ef29f20",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 24300,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "f3aeb692-3bf0-44bc-b1f2-dfc80bfe72ad",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 27281,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "fbd18ac2-b839-477b-996a-8002fad8d3d0",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 21150,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "866d1ad0-1df0-4934-95a4-2820d85c2a7e",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 21150,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "7c24f507-e248-4eb6-b26b-dfb3ae12491d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 23850,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "PW746 SUMM 8131 003 3996"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "78916"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000DUW4"
                    },
                    {
                        "name": "baseId",
                        "value": "78916"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "jacobcohen",
                            "label": "Jacob Cohen"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "yes",
                            "label": "yes"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "s",
                            "label": "S"
                        }
                    },
                    {
                        "name": "size",
                        "value": "28"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "grey",
                            "label": {
                                "de": "grau",
                                "en": "grey",
                                "it": "grigio"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "grey",
                            "de": "grau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "women",
                            "label": "Damen"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            },
            {
                "id": 6,
                "sku": "M0E20000000DUW5",
                "key": "M0E20000000DUW5",
                "prices": [
                    {
                        "id": "8a8e7109-4641-4b16-ab71-e94290e14f1c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "b9c2f90d-134e-4f63-9522-54086dea2c82",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "2ab20050-2ed9-4d05-afa4-47e5cc139cb2",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "66c1173a-d52d-41fb-9485-1e89c96148d7",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "225762a8-c945-448c-ae5e-58164ee61f13",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "cf582b91-04f9-4edf-9bf6-3c9ef0a6a15f",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "ebd91c0c-97d2-4c13-9599-d89461ce70f1",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "1dec25d5-b05c-47db-b633-22d40cc384b7",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 20925,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "936a2d1c-cb79-4273-835a-0dde1454d340",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 27844,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "015c7fc8-d00a-43dd-b88b-60ea9b490284",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "26ff233a-59ef-467d-aa4e-78fbf0c2c91d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 21375,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "2abe9424-1986-4496-99ee-25912545f6ea",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 20700,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "da24da14-f005-4f77-8eb9-8a2f75c07487",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 20925,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "bc3af6fe-a742-4ae4-b3fd-feeeb64fe5f5",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 27844,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "bde000e6-b826-4c9c-a612-4d4c40927f2d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "a83c8af1-171c-42e0-932b-cd90d5574767",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 21375,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "06fb33e5-3460-49f5-b684-ae3f6d5cc2bc",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 20700,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "PW746 SUMM 8131 003 3996"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "78916"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000DUW5"
                    },
                    {
                        "name": "baseId",
                        "value": "78916"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "jacobcohen",
                            "label": "Jacob Cohen"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "yes",
                            "label": "yes"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "s",
                            "label": "S"
                        }
                    },
                    {
                        "name": "size",
                        "value": "29"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "grey",
                            "label": {
                                "de": "grau",
                                "en": "grey",
                                "it": "grigio"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "grey",
                            "de": "grau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "women",
                            "label": "Damen"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            },
            {
                "id": 7,
                "sku": "M0E20000000DUW6",
                "key": "M0E20000000DUW6",
                "prices": [
                    {
                        "id": "3364dfa8-f432-4de5-8a69-a8dd3f8a49ee",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "0829063c-60ef-4ae0-84be-97063153e53e",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "ccf699f9-0fcd-4e93-bab4-01f9367dffe0",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "1ef38800-700c-4ebd-abc9-a930b29da549",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "d2ab5574-4fa7-4ac0-9eaf-2d71e1477360",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "042320bb-4fb7-4374-8253-5beb1eebbe76",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "625ee3ad-556e-4a25-8727-711e9cfa8050",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "e83a2713-5a90-4287-abc6-0100aa7de382",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 21375,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "b65c5d39-aac9-41ad-b5b6-19f0a5634a89",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 29531,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "2c949adb-66ff-4637-b8e3-af523432b0d4",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 20475,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "e64a313b-18e1-4f1d-bab4-daa69de685e9",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22725,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "9f6f1837-5ee9-431a-af7b-1145adfea152",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 23175,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "4e351c3e-d354-44d8-9c1e-d8b5f793badf",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 21375,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "c4f42ce7-4477-44af-ad33-3813ccc1afb1",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 29531,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "ab3ca0eb-f5db-4527-bd72-bd360c4396e5",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 20475,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "2be93a81-bd4b-47ba-a60a-7308e131796c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 22725,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "35e9e7ab-2027-4c88-8fd2-263c466082d2",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 23175,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "PW746 SUMM 8131 003 3996"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "78916"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000DUW6"
                    },
                    {
                        "name": "baseId",
                        "value": "78916"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "jacobcohen",
                            "label": "Jacob Cohen"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "yes",
                            "label": "yes"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "m",
                            "label": "M"
                        }
                    },
                    {
                        "name": "size",
                        "value": "30"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "grey",
                            "label": {
                                "de": "grau",
                                "en": "grey",
                                "it": "grigio"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "grey",
                            "de": "grau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "women",
                            "label": "Damen"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    },
                    {
                        "name": "isOnStock",
                        "value": true
                    }
                ],
                "assets": []
            },
            {
                "id": 8,
                "sku": "M0E20000000DUW7",
                "key": "M0E20000000DUW7",
                "prices": [
                    {
                        "id": "9e2a944c-d577-4273-832f-8fdc33933d79",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "96060958-c66f-4751-9e8b-d883a69198ff",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "a9c76a78-23e9-4ef4-a0f3-2f10277731ef",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "cb4d01f0-59dc-440a-8243-34b007ad8f9f",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "ac247632-04ea-4ea8-ac9d-205ea0e74182",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "30fb9fab-f826-444a-8583-2a937b10eccc",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "fae07cce-beb3-46a2-8a8a-66c51d2a959d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "a98f72a1-03a8-46d3-8c29-fb9974f67701",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22725,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "cfb8b722-e168-4361-8753-6ea4cd0b3f37",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 27000,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "c10d8516-8970-4d49-bed7-0e9c3422f2c2",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22050,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "5c7664c3-1094-4755-a708-f98b280566f2",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 20700,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "2bc5fe75-611c-47f1-a476-5260250e1e16",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 24750,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "ff41a4b2-7cd4-4cff-b87b-e38fd61f1e5c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 22725,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "0a9e2a07-644a-438b-8659-780a67b384ef",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 27000,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "3f65dc88-e501-45ec-939e-1fe0a9f88c22",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 22050,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "3be1742b-69f6-4a30-a55e-b5c5af23a306",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 20700,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "d13bb3b2-4bde-4ebd-9597-85f75e44b50b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 24750,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "PW746 SUMM 8131 003 3996"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "78916"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000DUW7"
                    },
                    {
                        "name": "baseId",
                        "value": "78916"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "jacobcohen",
                            "label": "Jacob Cohen"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "yes",
                            "label": "yes"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "m",
                            "label": "M"
                        }
                    },
                    {
                        "name": "size",
                        "value": "31"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "grey",
                            "label": {
                                "de": "grau",
                                "en": "grey",
                                "it": "grigio"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "grey",
                            "de": "grau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "women",
                            "label": "Damen"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    },
                    {
                        "name": "isOnStock",
                        "value": true
                    }
                ],
                "assets": []
            },
            {
                "id": 9,
                "sku": "M0E20000000DUW8",
                "key": "M0E20000000DUW8",
                "prices": [
                    {
                        "id": "f29971a5-058c-4729-ac66-7d1055948075",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "2f4466dc-da96-416a-a2e9-46f3af5d7396",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "43d7c07c-0320-46cd-a79b-acfaba0f7aa3",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "b8997d1f-0d64-45ca-a96a-f78c47404c2d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "255c0f4e-5133-427a-aa74-2ab64f1aa025",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "ff49dfcc-0773-4f7d-bd47-4ca52181d30f",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "7e4dbfdc-d521-417d-8a9f-cc04e067c51b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "59c426c8-daf1-4e4d-96fc-bff3e5551904",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 20700,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "128f97bb-c2f2-4316-a7a0-14a55e4a6afb",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28688,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "81c938c8-95e5-4e72-b1a7-ca1532a4ad8e",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22275,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "45035747-ce14-4dc3-ae78-4ef4e6fc296d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22275,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "88971350-c1b6-4745-a45b-88a9b283bfb3",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 20250,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "760c47eb-98e8-4598-bc9d-58561634afab",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 20700,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "2f794a12-bff9-4c6c-8397-78cff10c807c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28688,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "807f09c3-9f31-4715-9085-76b728643956",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 22275,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "503dc490-a668-4b6e-a9f7-2aca594dbb06",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 22275,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "0a9e7522-9a56-45b6-aad8-83d176b062ab",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 20250,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "PW746 SUMM 8131 003 3996"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "78916"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000DUW8"
                    },
                    {
                        "name": "baseId",
                        "value": "78916"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "jacobcohen",
                            "label": "Jacob Cohen"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "yes",
                            "label": "yes"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "l",
                            "label": "L"
                        }
                    },
                    {
                        "name": "size",
                        "value": "32"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "grey",
                            "label": {
                                "de": "grau",
                                "en": "grey",
                                "it": "grigio"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "grey",
                            "de": "grau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "women",
                            "label": "Damen"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            },
            {
                "id": 10,
                "sku": "M0E20000000DUW9",
                "key": "M0E20000000DUW9",
                "prices": [
                    {
                        "id": "b4162ea7-b585-4ebe-bf58-bffd8e5f7711",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "dc118cd9-bf39-4cba-bd0b-217a090f4b73",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "c233970e-01f1-40f2-b8ac-2bf9db6869c7",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "3dbd0e54-2994-411e-ab26-a48d8dff7ac3",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "ce36430c-f65a-4ab0-9bd1-00c45915a309",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "2471135b-a024-45a0-996d-c8d3d39f00e0",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "5a11e49f-41e9-4c38-818a-5eea3b5142b8",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "e79471c7-609b-41b5-8396-300ca685cc92",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22275,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "10f90ae2-4047-4a94-a75b-e4ad90ae8531",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 29250,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "cf98eef6-64be-41f4-9d36-4cf19b25b328",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 23625,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "f8c0cda3-277b-4e31-871f-d6f39f640d31",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "88353158-e9b4-4b73-94ec-eb221142fb0e",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 21825,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "717286d3-85da-4eba-9058-9934eab9927a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 22275,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "e04e04c9-201e-48d8-9dc3-0f59881b1f26",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 29250,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "00896fa3-3edb-4d96-bb2e-09b7ffaa0bee",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 23625,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "1704a426-5ea6-43d9-a57f-ae9164c2907f",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "ee04c209-6c6d-42e0-a851-94d9bec348a3",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 21825,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "PW746 SUMM 8131 003 3996"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "78916"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000DUW9"
                    },
                    {
                        "name": "baseId",
                        "value": "78916"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "jacobcohen",
                            "label": "Jacob Cohen"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "yes",
                            "label": "yes"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "xl",
                            "label": "XL"
                        }
                    },
                    {
                        "name": "size",
                        "value": "33"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "grey",
                            "label": {
                                "de": "grau",
                                "en": "grey",
                                "it": "grigio"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "grey",
                            "de": "grau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "women",
                            "label": "Damen"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            },
            {
                "id": 11,
                "sku": "M0E20000000DUWA",
                "key": "M0E20000000DUWA",
                "prices": [
                    {
                        "id": "ba1da7b2-f45e-43a3-b0c2-b1a1e3a6703f",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "99b2c0d7-6404-475e-aba6-cec0348c0c55",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "8352c016-529d-4152-bdd2-ea260060ebe0",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "3a13fff6-fa9f-49f8-9a46-c3aeb18b59b3",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "da9d2652-1d55-4ded-8935-c8f7720226fe",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "2c0ba8a6-83a2-4fc6-818c-d730dfc4a341",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "42fa30df-a25b-472a-a52e-7d808a4d725c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "66bb9fa9-f941-41dd-92b6-77256e72e583",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 24525,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "1ead99f4-2957-4f94-8383-3e721585ca6d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 26156,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "14987954-9b06-484a-95c3-21c352cfdbe1",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 21150,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "03bcc1e9-cf2d-42f7-b112-15f36233177a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 24750,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "1c9a7129-d9b1-4ee9-b2e9-15c0f4d9426d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 24300,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "9a97b606-693b-4e54-9f58-90bcb9760777",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 24525,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "794ce1a0-6626-4d27-8306-8f294e359029",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 26156,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "21c13b15-2aea-4334-a7bd-f2945cbe5981",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 21150,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "f3f10e35-ce45-4b25-9642-284535165aa7",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 24750,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "0014f11a-75b1-4966-b64a-0ec2082e3a5a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 24300,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "PW746 SUMM 8131 003 3996"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "78916"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000DUWA"
                    },
                    {
                        "name": "baseId",
                        "value": "78916"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "jacobcohen",
                            "label": "Jacob Cohen"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "yes",
                            "label": "yes"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "xxl",
                            "label": "XXL"
                        }
                    },
                    {
                        "name": "size",
                        "value": "34"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "grey",
                            "label": {
                                "de": "grau",
                                "en": "grey",
                                "it": "grigio"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "grey",
                            "de": "grau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "women",
                            "label": "Damen"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            },
            {
                "id": 12,
                "sku": "M0E20000000DUWB",
                "key": "M0E20000000DUWB",
                "prices": [
                    {
                        "id": "f9c311bb-28c2-4519-8c6f-bc174d193b75",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "ebd7976e-ed25-4496-9e38-94a7247914fc",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "5691aa15-6286-4682-a44d-840db4a714c9",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "352e082c-f0cc-409b-a988-1bc7770d13d7",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "9bd0c01f-c094-49c2-8931-da79b02a889c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "ddfbc097-c459-430e-83a9-0d1649c2e65a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "bcfc6567-486d-48f6-92cc-e6338d363685",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "f43c41ee-b9da-4f6f-ad79-c054ab2f751c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 24750,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "bdb44934-c34b-47b8-b3fa-58d0cdc92d88",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "19fe89de-e036-4dd4-8eea-61a266af0347",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 23850,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "791be1a1-79fb-46c3-9690-f596842b0044",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 21600,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "adac23ea-17d3-4895-a38c-e6a07c4e813c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22050,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "74b15096-014e-40b3-ae83-aeb0de464cbe",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 24750,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "be2d4f8a-45d8-4411-aefd-010ec822f323",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "c114158f-5c73-47e2-bce0-a2d8c8906e77",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 23850,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "7a469e10-af9b-4e25-be5b-c9fd4813f3f1",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 21600,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "2885770f-e565-41bf-a383-767af5974547",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 22050,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "PW746 SUMM 8131 003 3996"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "78916"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000DUWB"
                    },
                    {
                        "name": "baseId",
                        "value": "78916"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "jacobcohen",
                            "label": "Jacob Cohen"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "yes",
                            "label": "yes"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "xxxl",
                            "label": "XXXL"
                        }
                    },
                    {
                        "name": "size",
                        "value": "35"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "grey",
                            "label": {
                                "de": "grau",
                                "en": "grey",
                                "it": "grigio"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "grey",
                            "de": "grau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "women",
                            "label": "Damen"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            },
            {
                "id": 13,
                "sku": "M0E20000000DUWC",
                "key": "M0E20000000DUWC",
                "prices": [
                    {
                        "id": "34caacc7-5421-4abf-87d5-ae42b0ee8eb4",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "ca9e76ce-f3cc-4570-997e-7850f5283d68",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "e9b4e539-9ae6-4aac-8f39-ca1688daa313",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "6af5498f-0558-4b9a-a10b-a28764236837",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "569a2a00-136e-4753-97a4-a115bbeffcc5",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "373ce8f0-2b3c-4846-93bd-f1471719551b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "9e67e2d9-33c9-46ac-8bae-e49dfb847a5b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "2935b81a-de0e-486f-b940-8b7dc626e366",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 21375,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "8e9d1019-bb1f-46cd-8174-7a043f753621",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 25594,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "62cfcdef-3380-446c-81cc-134b87b1992d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 20700,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "da625216-d4bf-4988-88c9-1a0105f36343",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 24075,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "1cd78136-884b-48de-ba35-bd2ace91d54b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 23625,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "a77e7648-bf55-4de8-9539-6c69b3269b44",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 21375,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "d8165efa-81fd-4dfb-b618-ddf02409eaad",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 25594,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "810aedca-65f9-4b15-a1c4-c02ff48c784e",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 20700,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "9869e9a8-92b4-4484-80a1-8da446090d36",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 24075,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "33e420ed-05e0-409c-8049-d2c529fbb5b5",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 23625,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "PW746 SUMM 8131 003 3996"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "78916"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000DUWC"
                    },
                    {
                        "name": "baseId",
                        "value": "78916"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "jacobcohen",
                            "label": "Jacob Cohen"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "yes",
                            "label": "yes"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "xxxl",
                            "label": "XXXL"
                        }
                    },
                    {
                        "name": "size",
                        "value": "36"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "grey",
                            "label": {
                                "de": "grau",
                                "en": "grey",
                                "it": "grigio"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "grey",
                            "de": "grau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "women",
                            "label": "Damen"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            },
            {
                "id": 14,
                "sku": "M0E20000000DUWD",
                "key": "M0E20000000DUWD",
                "prices": [
                    {
                        "id": "43f41c18-7107-400b-a17c-bbec688efb19",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "0e8814d7-0393-4ca0-b5fd-7f655ce04312",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "92557541-4bdc-46bf-ac6d-b4a42518bafb",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "adcc6211-fdfc-4b70-9495-53912b2374cb",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "27b8c03c-6816-42b2-86ca-6e14588b0c79",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "0903e780-5c6c-4672-a7b1-bacc86dcc242",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "3d4822a8-0cea-400f-a19e-2ca3b377d65d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "c6fbe449-da99-4367-86a7-ad8e4c4c3146",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 24075,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "d51d83df-e9b7-4cbe-b9ed-e69de097d41d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 27281,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "3cdf01c7-3f78-4888-b0e7-aa22d670c772",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 20925,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "9bc8d44d-ce32-4124-b989-b6926e41b086",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 20925,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "0af44a80-d0ac-4637-85c8-fd0f4705989e",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 23850,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "269e4c3e-cb3b-4827-940e-37a8b4a59390",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 24075,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "2dc11b15-364a-4d63-aec7-5b843178885a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 27281,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "1c3e1dfc-4074-412b-be44-30918745ed08",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 20925,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "63610e44-2a95-41a0-ba6b-17379ee09fe6",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 20925,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "854d8f1c-0ca6-435c-8b91-bbecf87cf68a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 23850,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "PW746 SUMM 8131 003 3996"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "78916"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000DUWD"
                    },
                    {
                        "name": "baseId",
                        "value": "78916"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "jacobcohen",
                            "label": "Jacob Cohen"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "yes",
                            "label": "yes"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "xxxl",
                            "label": "XXXL"
                        }
                    },
                    {
                        "name": "size",
                        "value": "37"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "grey",
                            "label": {
                                "de": "grau",
                                "en": "grey",
                                "it": "grigio"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "grey",
                            "de": "grau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "women",
                            "label": "Damen"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            },
            {
                "id": 15,
                "sku": "M0E20000000DUWE",
                "key": "M0E20000000DUWE",
                "prices": [
                    {
                        "id": "3c226c12-caef-4b25-892a-89deddc7e8ca",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "bc66f8e9-7957-4253-8aa2-5c7a704c2272",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "edae689a-ccbe-4b95-9332-a678afe0500f",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "71601a38-131e-472b-8dbf-21ed6a44711a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "63e51143-e80f-43c8-8580-9d40a5fcf4b7",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "c6088262-1e57-4d17-be49-4eace755a08d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "e9e05976-0947-4229-b31b-ece46756e073",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "26197a9b-1101-4031-acb7-11cb5dda819f",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 20925,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "789e2d8c-cd56-4111-ae47-4535360aa7ed",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 27844,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "7703c607-3ac6-4f1f-9eb8-34139712694c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "5f215a1c-6ec8-4f64-a5f8-5b60858ba445",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 21150,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "a115815b-2c9c-4c9d-aa2b-997f85f3b58d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 20700,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "85a1852c-746b-4d4b-bc4d-a40c97a29b0b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 20925,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "ae0d0a55-7841-48f7-9c11-ed86d7f43b74",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 27844,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "56716452-759f-4579-bc48-8eac826d823d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "52b32430-8619-4988-beb0-a28f7918f18a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 21150,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "364792e7-ac79-41e2-b47f-c9660b1c833a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 20700,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "PW746 SUMM 8131 003 3996"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "78916"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000DUWE"
                    },
                    {
                        "name": "baseId",
                        "value": "78916"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "jacobcohen",
                            "label": "Jacob Cohen"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "yes",
                            "label": "yes"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "xxxl",
                            "label": "XXXL"
                        }
                    },
                    {
                        "name": "size",
                        "value": "38"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "grey",
                            "label": {
                                "de": "grau",
                                "en": "grey",
                                "it": "grigio"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "grey",
                            "de": "grau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "women",
                            "label": "Damen"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            },
            {
                "id": 16,
                "sku": "M0E20000000DUWF",
                "key": "M0E20000000DUWF",
                "prices": [
                    {
                        "id": "9e151924-f836-43e7-ad40-a16886d64e3e",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "fe731168-2586-4dc4-8a12-140ceac48adf",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "59852808-5992-4388-b532-f7b44c37940e",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "df5e118c-89f9-4612-9c72-d65bfa11ae9a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "e86124c6-944a-4281-814c-431faf4e9391",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "cbb3a9af-01bc-4712-b8e1-2bf051861b28",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "9684b9fa-5e6e-47f0-9291-514c636dd774",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "5bb3101d-1509-4a7a-b463-97b7431219c9",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 21150,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "c42743b5-d56c-4f7c-bf52-794a7dd4b7a0",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 29531,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "64d6ed41-c92d-4f11-9040-8db2a6e4ae54",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 20250,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "a01eec43-f4a0-42e3-9afc-240a4967ff00",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22725,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "dd8fb7f7-d2fd-44c8-8909-52872cd3f905",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 23400,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "0f4092e2-0312-42cd-99d1-457bf135d6a4",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 21150,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "25e24f1d-c5cf-4a7c-97cf-e89c2df58c15",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 29531,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "e164bfcb-b506-4617-8486-ebfaccd2102a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 20250,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "57eb32af-071b-4452-8277-25022fcd48ac",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 22725,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "8bc6be74-49cb-4497-b69d-3831af712d94",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 23400,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "PW746 SUMM 8131 003 3996"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "78916"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000DUWF"
                    },
                    {
                        "name": "baseId",
                        "value": "78916"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "jacobcohen",
                            "label": "Jacob Cohen"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "yes",
                            "label": "yes"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "xxxl",
                            "label": "XXXL"
                        }
                    },
                    {
                        "name": "size",
                        "value": "40"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "grey",
                            "label": {
                                "de": "grau",
                                "en": "grey",
                                "it": "grigio"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "grey",
                            "de": "grau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "women",
                            "label": "Damen"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            },
            {
                "id": 17,
                "sku": "M0E20000000DUWG",
                "key": "M0E20000000DUWG",
                "prices": [
                    {
                        "id": "8be751e1-e6e4-489d-a717-d5b8dc589540",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "c4963876-12db-4f35-926b-7f565a34b127",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "17be8674-fa9e-4094-91c1-d6ebe38a51eb",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 28125,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "1020d0a3-2aea-4233-90e4-801f02e5db88",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18443,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "86c156ad-ea43-46f7-8b2e-beb2393d9707",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "2341627a-bec4-4c84-959c-80bb13d6a4d5",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "3f3e8991-5161-43c5-9d49-36abff395602",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22500,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "d71afedc-cbb8-4653-b31e-337bd2707f5a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 22725,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "928380b0-6040-4b96-ad12-d9ff355efb08",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 27000,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "e7491d25-3fd8-4605-959d-6f02388648cd",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 21825,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "8788d25a-1fc8-472d-8761-646174199eb9",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 20700,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "11fc1ba4-0d02-4d6c-947c-452c3825097c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 24750,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "44a30eeb-6cf6-4e57-9dc1-9fe4efb5bc6b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 22725,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "532cfb8e-13ef-4f63-bf48-10df5c28f8f0",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 27000,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "4afc325e-fcc7-4d52-9bc9-302c72e6e174",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 21825,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "f51ee505-de0e-450b-b66c-a831aead7a48",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 20700,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "a8d5c96b-b48d-461b-9dbc-54e729889ea6",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 24750,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078916_1_medium.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "PW746 SUMM 8131 003 3996"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "78916"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000DUWG"
                    },
                    {
                        "name": "baseId",
                        "value": "78916"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "jacobcohen",
                            "label": "Jacob Cohen"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "yes",
                            "label": "yes"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "xxxl",
                            "label": "XXXL"
                        }
                    },
                    {
                        "name": "size",
                        "value": "42"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "grey",
                            "label": {
                                "de": "grau",
                                "en": "grey",
                                "it": "grigio"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "grey",
                            "de": "grau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "women",
                            "label": "Damen"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            }
        ],
        "searchKeywords": {},
        "hasStagedChanges": false,
        "published": true,
        "taxCategory": {
            "typeId": "tax-category",
            "id": "e4eaff1f-e8e2-4343-88c8-4fe07496debc"
        },
        "createdAt": "2022-06-14T07:16:43.185Z",
        "lastModifiedAt": "2022-07-05T10:27:55.217Z"
    },
    {
        "id": "ada1a771-e9ac-4900-bf4d-b01e626e6f9f",
        "version": 4,
        "productType": {
            "typeId": "product-type",
            "id": "60dee9c4-a696-479a-9995-fd9c5e8e0f6f"
        },
        "name": {
            "en": "Shirt Closed light blue",
            "de": "Hemd Closed hellblau"
        },
        "categories": [
            {
                "typeId": "category",
                "id": "0689e62a-cd10-48e5-a659-ed1db9951cc1"
            },
            {
                "typeId": "category",
                "id": "2ad23229-9063-4299-8984-dbe1a09b4f9f"
            }
        ],
        "categoryOrderHints": {},
        "slug": {
            "en": "closed-shirt-c84096-blue",
            "de": "closed-hemd-c84096-blau"
        },
        "masterVariant": {
            "id": 1,
            "sku": "M0E20000000E5E2",
            "key": "M0E20000000E5E2",
            "prices": [
                {
                    "id": "d90c8191-067f-48ca-a6ea-443afac80845",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 17375,
                        "fractionDigits": 2
                    }
                },
                {
                    "id": "7d192398-5190-471b-a7aa-19c5b2057f7e",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 11393,
                        "fractionDigits": 2
                    },
                    "customerGroup": {
                        "typeId": "customer-group",
                        "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                    }
                },
                {
                    "id": "406416b9-1865-40b2-ba41-018314e5bf01",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "USD",
                        "centAmount": 17375,
                        "fractionDigits": 2
                    },
                    "country": "US"
                },
                {
                    "id": "0a794708-b10b-491a-9127-fece422587b6",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "USD",
                        "centAmount": 11393,
                        "fractionDigits": 2
                    },
                    "customerGroup": {
                        "typeId": "customer-group",
                        "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                    }
                },
                {
                    "id": "f9c51e90-c72e-4159-88be-416ca1eaa1c6",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 13900,
                        "fractionDigits": 2
                    },
                    "country": "DE"
                },
                {
                    "id": "96d7f974-d330-4d13-b96e-6b039d019b75",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 13900,
                        "fractionDigits": 2
                    },
                    "country": "IT"
                },
                {
                    "id": "0c9d9b2a-497a-4d3b-8d32-b473203b55aa",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 13900,
                        "fractionDigits": 2
                    },
                    "country": "GB"
                },
                {
                    "id": "94b77f84-8a1e-42da-ab83-88e73a4e0888",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 13066,
                        "fractionDigits": 2
                    },
                    "country": "DE",
                    "channel": {
                        "typeId": "channel",
                        "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                    }
                },
                {
                    "id": "cf0db1ff-d206-4fa8-afc1-081d2aee1f2b",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 17549,
                        "fractionDigits": 2
                    },
                    "channel": {
                        "typeId": "channel",
                        "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                    }
                },
                {
                    "id": "c180f5d9-b77d-4ff6-b0c4-24831bf88d15",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 14178,
                        "fractionDigits": 2
                    },
                    "country": "DE",
                    "channel": {
                        "typeId": "channel",
                        "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                    }
                },
                {
                    "id": "f1707554-c278-46b3-a886-bef8647db6ff",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 14456,
                        "fractionDigits": 2
                    },
                    "country": "DE",
                    "channel": {
                        "typeId": "channel",
                        "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                    }
                },
                {
                    "id": "30e95165-d930-40d5-934d-a102a091b97c",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "EUR",
                        "centAmount": 13066,
                        "fractionDigits": 2
                    },
                    "country": "DE",
                    "channel": {
                        "typeId": "channel",
                        "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                    }
                },
                {
                    "id": "a9aa8948-6ec5-4630-a71a-f5f65ada4623",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "USD",
                        "centAmount": 13066,
                        "fractionDigits": 2
                    },
                    "country": "US",
                    "channel": {
                        "typeId": "channel",
                        "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                    }
                },
                {
                    "id": "56dcf52e-6397-4ac1-98c7-3f5dc8123b35",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "USD",
                        "centAmount": 17549,
                        "fractionDigits": 2
                    },
                    "channel": {
                        "typeId": "channel",
                        "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                    }
                },
                {
                    "id": "89babdaa-5fc9-460c-aeaf-cdb37b735a86",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "USD",
                        "centAmount": 14178,
                        "fractionDigits": 2
                    },
                    "country": "US",
                    "channel": {
                        "typeId": "channel",
                        "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                    }
                },
                {
                    "id": "eb421347-fb09-45f1-8521-87dc32d172e1",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "USD",
                        "centAmount": 14456,
                        "fractionDigits": 2
                    },
                    "country": "US",
                    "channel": {
                        "typeId": "channel",
                        "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                    }
                },
                {
                    "id": "6a51907a-d160-473a-a3be-fc74a1cd7e01",
                    "value": {
                        "type": "centPrecision",
                        "currencyCode": "USD",
                        "centAmount": 13066,
                        "fractionDigits": 2
                    },
                    "country": "US",
                    "channel": {
                        "typeId": "channel",
                        "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                    }
                }
            ],
            "images": [
                {
                    "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080181_1_large.jpg",
                    "dimensions": {
                        "w": 0,
                        "h": 0
                    }
                }
            ],
            "attributes": [
                {
                    "name": "articleNumberManufacturer",
                    "value": "C84096 17A V4"
                },
                {
                    "name": "articleNumberMax",
                    "value": "80181"
                },
                {
                    "name": "matrixId",
                    "value": "M0E20000000E5E2"
                },
                {
                    "name": "baseId",
                    "value": "80181"
                },
                {
                    "name": "designer",
                    "value": {
                        "key": "closed",
                        "label": "Closed"
                    }
                },
                {
                    "name": "madeInItaly",
                    "value": {
                        "key": "no",
                        "label": "no"
                    }
                },
                {
                    "name": "commonSize",
                    "value": {
                        "key": "xxs",
                        "label": "XXS"
                    }
                },
                {
                    "name": "size",
                    "value": "XXS"
                },
                {
                    "name": "color",
                    "value": {
                        "key": "blue",
                        "label": {
                            "de": "blau",
                            "it": "blu",
                            "en": "blue"
                        }
                    }
                },
                {
                    "name": "colorFreeDefinition",
                    "value": {
                        "en": "light blue",
                        "de": "hellblau"
                    }
                },
                {
                    "name": "style",
                    "value": {
                        "key": "sporty",
                        "label": "sporty"
                    }
                },
                {
                    "name": "gender",
                    "value": {
                        "key": "men",
                        "label": "Herren"
                    }
                },
                {
                    "name": "season",
                    "value": "s15"
                }
            ],
            "assets": []
        },
        "variants": [
            {
                "id": 2,
                "sku": "M0E20000000E5E3",
                "key": "M0E20000000E5E3",
                "prices": [
                    {
                        "id": "471a5f8b-91d1-4c74-81cf-0c120e5380c8",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 17375,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "d05b3937-dd58-4516-a53e-36e7d079d4e8",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 11393,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "5b0d5b19-2d97-4f2c-8517-8fc379e64129",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 17375,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "b2f8ed05-a3b1-47ef-ac7a-88c0d28f7a1f",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 11393,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "24e7da20-ffe2-487a-bf87-ad9919bf1bad",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "b820a78a-8ea3-4a00-b488-1c3f587a1ac8",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "5d14f4da-5089-4c9c-ad6c-36789ce5ddfe",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "56b24191-2e54-4312-9c24-6b8534383e4d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 14595,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "cef2cc11-b8b0-4e76-a01a-ae7bf75586da",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18591,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "d121a4e8-0ad1-4ad7-be8e-227c6a61482e",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 14317,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "e2bae7f4-4117-47e7-b31b-5e8e9c5b53ec",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 15290,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "cf4aca5c-f04e-40da-8575-067ff7b39652",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13205,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "10b942da-b555-4761-b4a5-a4a6a7835c5f",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 14595,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "96b58fa5-9c4d-48bf-8435-15743bad155b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18591,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "097d1e85-70c3-4a0f-8569-751ccd0bb448",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 14317,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "cbd63c92-bfe2-4738-9128-926664d64bb4",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 15290,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "73ae07c9-51e3-4b9c-80a1-130de2b65e6f",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 13205,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080181_1_large.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "C84096 17A V4"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "80181"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000E5E3"
                    },
                    {
                        "name": "baseId",
                        "value": "80181"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "closed",
                            "label": "Closed"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "no",
                            "label": "no"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "xs",
                            "label": "XS"
                        }
                    },
                    {
                        "name": "size",
                        "value": "XS"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "blue",
                            "label": {
                                "de": "blau",
                                "it": "blu",
                                "en": "blue"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "light blue",
                            "de": "hellblau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "men",
                            "label": "Herren"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            },
            {
                "id": 3,
                "sku": "M0E20000000E5E4",
                "key": "M0E20000000E5E4",
                "prices": [
                    {
                        "id": "5539149d-2f4a-45eb-90b3-55bc63ac1e40",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 17375,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "9f433685-aab3-4a52-b040-83adb16cc950",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 11393,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "55dfceb1-8026-44ad-b4d6-580ee297c9c7",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 17375,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "fbb267a0-5065-47ec-bf2b-c449a863d436",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 11393,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "956266ec-7947-4b10-a97d-abe85d45e808",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "ed177e36-4f4d-4831-adbd-6032ab54e032",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "83354adf-7e7f-41aa-ab2e-98c55daf0fdd",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "1bc3593c-8272-4391-8ae1-def00f1b8cb8",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 12649,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "af3d1c74-9c0e-4563-8a50-285c33a4e40d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18939,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "860fc84e-2c03-435b-bdfd-d0ab4178ecad",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 15151,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "86ec90f6-bc07-4c14-a9ef-cd2abd830429",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 12649,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "60ab6087-262e-445e-876b-57582b46681a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 14178,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "3b4008ed-ebcd-4705-8012-50e2d5057bb4",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 12649,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "e6213f96-6b9a-41ea-a941-cbc2c28929d3",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18939,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "85f2a26b-459f-43cd-8904-51f5b474b14c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 15151,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "82990726-4a8c-4ddb-8fe3-2f223114ed7a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 12649,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "8d3cd26e-9e6e-498a-b7ab-f4ba2af29a89",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 14178,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080181_1_large.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "C84096 17A V4"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "80181"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000E5E4"
                    },
                    {
                        "name": "baseId",
                        "value": "80181"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "closed",
                            "label": "Closed"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "no",
                            "label": "no"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "s",
                            "label": "S"
                        }
                    },
                    {
                        "name": "size",
                        "value": "S"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "blue",
                            "label": {
                                "de": "blau",
                                "it": "blu",
                                "en": "blue"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "light blue",
                            "de": "hellblau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "men",
                            "label": "Herren"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    },
                    {
                        "name": "isOnStock",
                        "value": true
                    }
                ],
                "assets": []
            },
            {
                "id": 4,
                "sku": "M0E20000000E5E5",
                "key": "M0E20000000E5E5",
                "prices": [
                    {
                        "id": "ebb6c264-b30f-4db2-92cd-90c8bb44bcf7",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 17375,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "5aba80e3-63e3-4417-9065-b1755b5f956e",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 11393,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "14023896-eb31-4a9b-ade6-b275869d99a5",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 17375,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "506e80cc-a35d-4e30-9ec1-f6ed0b2c4e32",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 11393,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "3311277e-23a1-454e-939c-fb8f21f67de6",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "6d2275d4-976f-4257-893b-98a815ec9c14",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "e49a0d70-0af3-4c50-96fc-5180edc84086",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "2681de8d-f460-484b-8df5-3f7b5a883336",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 12788,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "461cbe8b-b4a7-4df0-8331-b620721db65b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 16332,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "7c9b1723-82ef-4bce-a814-3a575b7633a9",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "3b7944e4-a405-4c5a-892d-bceb477426a4",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13483,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "d34c45fe-b426-4621-8ac9-59ce7e86f671",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 12788,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "039eaf45-d5d5-4508-8e1e-7f65c0c25609",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 12788,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "8c60f656-1c16-4425-8632-2d8d23ff4fdd",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 16332,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "38a7488b-f77f-4778-bfcb-daeb861b1f25",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "b48988a4-1050-4603-ab47-80261cf20b05",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 13483,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "047d99a5-d4bc-41f0-b1b3-efe0d3cd213e",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 12788,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080181_1_large.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "C84096 17A V4"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "80181"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000E5E5"
                    },
                    {
                        "name": "baseId",
                        "value": "80181"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "closed",
                            "label": "Closed"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "no",
                            "label": "no"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "m",
                            "label": "M"
                        }
                    },
                    {
                        "name": "size",
                        "value": "M"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "blue",
                            "label": {
                                "de": "blau",
                                "it": "blu",
                                "en": "blue"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "light blue",
                            "de": "hellblau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "men",
                            "label": "Herren"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            },
            {
                "id": 5,
                "sku": "M0E20000000E5E6",
                "key": "M0E20000000E5E6",
                "prices": [
                    {
                        "id": "9a6cc6fd-0a41-4a55-b2fd-d096cf2f4cc6",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 17375,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "b4f1ef71-955f-475f-91dc-73be654730c8",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 11393,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "a30851cf-1764-4678-a1e9-497cbf768b76",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 17375,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "e1f82c76-f2c5-440c-9af3-c27536d47391",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 11393,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "7583b7cd-b3f4-4672-87fc-bd5a75b0cef0",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "a1d95f5f-3e06-45b6-8d75-a2d66629c859",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "c2caf272-e156-4f86-9f36-332feb96262e",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "a5ba1cf2-1f6b-405b-996b-8e666e9c3713",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13761,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "d1167245-9d39-42b1-b1f0-321f603eb587",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 18418,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "a7af08a9-e916-48cd-bee0-638e31b94569",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 14873,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "98b9e178-95e1-47ee-a43a-93614d96f0bf",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 15151,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "2a88e76d-3b0b-4701-b0fd-81c2bea54676",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13761,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "f7e83df2-5f33-400b-b27f-a999f873e35e",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 13761,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "2a7431c8-1832-42a6-b282-6a2071dd08a8",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 18418,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "f7532ecd-7eac-446f-99c4-117f5c37cf86",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 14873,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "6d8f5028-b461-49b5-9aa1-c1c01e1555a2",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 15151,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "352dd6ae-70a8-4908-b48b-b868c79f8f01",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 13761,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080181_1_large.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "C84096 17A V4"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "80181"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000E5E6"
                    },
                    {
                        "name": "baseId",
                        "value": "80181"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "closed",
                            "label": "Closed"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "no",
                            "label": "no"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "l",
                            "label": "L"
                        }
                    },
                    {
                        "name": "size",
                        "value": "L"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "blue",
                            "label": {
                                "de": "blau",
                                "it": "blu",
                                "en": "blue"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "light blue",
                            "de": "hellblau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "men",
                            "label": "Herren"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            },
            {
                "id": 6,
                "sku": "M0E20000000E5E7",
                "key": "M0E20000000E5E7",
                "prices": [
                    {
                        "id": "b4a9ecce-c972-424c-84e5-f826ba63f019",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 17375,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "ec1ad754-d6b6-4af8-9427-61f30759fe35",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 11393,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "fc30e1d4-2170-4b17-befb-06f04c4d3e7a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 17375,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "c8d9c5d4-53de-415e-a34c-790ccf1cec72",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 11393,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "7dc30233-41fd-4fd9-b264-b5360c3e6b7a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "d07f39b4-1faf-4d83-91ce-c51baa2495c3",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "c65b73e8-c68c-4d13-bb46-2bdcb322cf21",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "9c9d14f1-246e-4b0f-a700-a2c7cc709456",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 12510,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "11b78788-d763-4b13-9911-ac6f881d993b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 15985,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "96a982e2-821b-4b60-9610-907200175021",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 15012,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "a7e9a84b-9165-4602-b1f9-3cc6fbea3c1a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13066,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "de8d3c21-0991-45a7-ae23-762e320de9ad",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "a1e09f18-3c0a-4570-97ff-220a17fbac17",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 12510,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "dc593a28-3367-4a4d-99a1-933a989e3638",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 15985,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "b04c2b8f-7b4b-4146-a7a8-d4491e1a747a",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 15012,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "e4e150aa-6c90-47c4-9652-a3ea295a6f51",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 13066,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "2276b7cc-22fe-44c5-bd31-48ddee122a0b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080181_1_large.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "C84096 17A V4"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "80181"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000E5E7"
                    },
                    {
                        "name": "baseId",
                        "value": "80181"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "closed",
                            "label": "Closed"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "no",
                            "label": "no"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "xl",
                            "label": "XL"
                        }
                    },
                    {
                        "name": "size",
                        "value": "XL"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "blue",
                            "label": {
                                "de": "blau",
                                "it": "blu",
                                "en": "blue"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "light blue",
                            "de": "hellblau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "men",
                            "label": "Herren"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    },
                    {
                        "name": "isOnStock",
                        "value": true
                    }
                ],
                "assets": []
            },
            {
                "id": 7,
                "sku": "M0E20000000E5E8",
                "key": "M0E20000000E5E8",
                "prices": [
                    {
                        "id": "5ad6af6f-c404-41b4-8025-f0b10a9ab867",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 17375,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "fe8474f9-0457-4f86-8ffd-b4a9971a3118",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 11393,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "9f599525-fe41-480f-a1ea-452187b38cb8",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 17375,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "d96b6e7d-6e8d-4889-ae01-ccb6e2c05062",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 11393,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "0912efb3-163f-43db-b8e1-282d74e6885b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "00e0279c-753f-45e9-aa40-291c232e5e20",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "f477d166-2d1d-46bc-b244-91e2d04f84e5",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "cd77fa72-7048-4b8d-9097-21f74af912f1",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13344,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "64a9d5e9-d616-4699-a8e4-8c2386405dbe",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 16159,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "51ef0fa3-35e7-4a32-8568-785efeb4b15c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13066,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "9c78896e-1335-4ec0-bccb-041b502cfa4e",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13344,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "307f9812-95e1-42bf-95e0-c129416391fc",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 14873,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "7829737b-41d2-426d-841b-fb5da195d51e",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 13344,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "256b653b-1280-44a3-8a1a-1c13e2a94585",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 16159,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "048e9295-ff24-46f9-8d54-b16185b5763b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 13066,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "7c9b4aef-5453-4265-b201-bfdee248d3aa",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 13344,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "5598c9ad-25f2-45f4-8a8e-45897a9f1b80",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 14873,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080181_1_large.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "C84096 17A V4"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "80181"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000E5E8"
                    },
                    {
                        "name": "baseId",
                        "value": "80181"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "closed",
                            "label": "Closed"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "no",
                            "label": "no"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "xxl",
                            "label": "XXL"
                        }
                    },
                    {
                        "name": "size",
                        "value": "XXL"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "blue",
                            "label": {
                                "de": "blau",
                                "it": "blu",
                                "en": "blue"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "light blue",
                            "de": "hellblau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "men",
                            "label": "Herren"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            },
            {
                "id": 8,
                "sku": "M0E20000000E5E9",
                "key": "M0E20000000E5E9",
                "prices": [
                    {
                        "id": "b1b284ec-36c4-4a0d-ac14-b0197b5ef770",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 17375,
                            "fractionDigits": 2
                        }
                    },
                    {
                        "id": "5edfb082-2b1a-4663-8b60-c2aa4e88db56",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 11393,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "474dbf4c-1b42-4304-80db-493a3c966bf8",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 17375,
                            "fractionDigits": 2
                        },
                        "country": "US"
                    },
                    {
                        "id": "4ce1bb1a-398b-4ff9-a6e2-437e7fad310b",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 11393,
                            "fractionDigits": 2
                        },
                        "customerGroup": {
                            "typeId": "customer-group",
                            "id": "7cedacea-14ce-4a3a-8de2-34f9d044de34"
                        }
                    },
                    {
                        "id": "05a974d9-6327-4e48-ac38-da70635ee451",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "DE"
                    },
                    {
                        "id": "fb5f326a-9096-45c6-a39c-9f255b9df682",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "IT"
                    },
                    {
                        "id": "a0fe8c30-be23-4a87-a97a-d6b783f3c3cd",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13900,
                            "fractionDigits": 2
                        },
                        "country": "GB"
                    },
                    {
                        "id": "2d157e7c-dc5f-440c-b91a-46685844a5a1",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13622,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "78c38393-6e65-4c42-a0ad-9262454737e9"
                        }
                    },
                    {
                        "id": "3ead0fd8-8b52-4403-9d3c-81ab7a38e21c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 17201,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "65380e1d-94e7-476d-9ce3-90281bc06009"
                        }
                    },
                    {
                        "id": "acf63614-848b-4bb5-b139-4cb6417e7577",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 14734,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "ec784cf1-bdb2-47f1-a182-275e1af7e6bc"
                        }
                    },
                    {
                        "id": "0cf3a875-2a19-46e4-94f7-fb80b7024fa9",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 14178,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "a16c106b-0abe-4092-8865-e1675cd3ab78"
                        }
                    },
                    {
                        "id": "40f92f2d-a4df-4b89-824e-3de0e5b5d67c",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 13622,
                            "fractionDigits": 2
                        },
                        "country": "DE",
                        "channel": {
                            "typeId": "channel",
                            "id": "b80636ee-f212-4aea-acfa-a44c1affe00a"
                        }
                    },
                    {
                        "id": "5b8ac5d2-663b-4bf9-adaf-9267ede99404",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 13622,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "6001ec08-91c4-42fb-a211-fb76f1e43c0d"
                        }
                    },
                    {
                        "id": "e164ffcb-b27c-46ad-a7c4-253b8c3be5c2",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 17201,
                            "fractionDigits": 2
                        },
                        "channel": {
                            "typeId": "channel",
                            "id": "95afc39b-d389-467f-87a3-95e2f2f8f6cf"
                        }
                    },
                    {
                        "id": "abb3da02-1e3d-44a3-9600-a6d8aeb6995d",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 14734,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "2d4e90c8-6007-4739-a6d6-11d6ee1833f1"
                        }
                    },
                    {
                        "id": "1de7c9af-d2ef-4b57-b586-b50f8618bd58",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 14178,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "87206c98-925f-4e4a-b7a6-4dd7df20dfb6"
                        }
                    },
                    {
                        "id": "dfdc172f-42d2-43b3-a781-cea5f10d5ccb",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 13622,
                            "fractionDigits": 2
                        },
                        "country": "US",
                        "channel": {
                            "typeId": "channel",
                            "id": "4fc2cac3-b428-44ca-a857-a233e714179e"
                        }
                    }
                ],
                "images": [
                    {
                        "url": "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080181_1_large.jpg",
                        "dimensions": {
                            "w": 0,
                            "h": 0
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "articleNumberManufacturer",
                        "value": "C84096 17A V4"
                    },
                    {
                        "name": "articleNumberMax",
                        "value": "80181"
                    },
                    {
                        "name": "matrixId",
                        "value": "M0E20000000E5E9"
                    },
                    {
                        "name": "baseId",
                        "value": "80181"
                    },
                    {
                        "name": "designer",
                        "value": {
                            "key": "closed",
                            "label": "Closed"
                        }
                    },
                    {
                        "name": "madeInItaly",
                        "value": {
                            "key": "no",
                            "label": "no"
                        }
                    },
                    {
                        "name": "commonSize",
                        "value": {
                            "key": "xxxl",
                            "label": "XXXL"
                        }
                    },
                    {
                        "name": "size",
                        "value": "XXXL"
                    },
                    {
                        "name": "color",
                        "value": {
                            "key": "blue",
                            "label": {
                                "de": "blau",
                                "it": "blu",
                                "en": "blue"
                            }
                        }
                    },
                    {
                        "name": "colorFreeDefinition",
                        "value": {
                            "en": "light blue",
                            "de": "hellblau"
                        }
                    },
                    {
                        "name": "style",
                        "value": {
                            "key": "sporty",
                            "label": "sporty"
                        }
                    },
                    {
                        "name": "gender",
                        "value": {
                            "key": "men",
                            "label": "Herren"
                        }
                    },
                    {
                        "name": "season",
                        "value": "s15"
                    }
                ],
                "assets": []
            }
        ],
        "searchKeywords": {},
        "hasStagedChanges": false,
        "published": true,
        "taxCategory": {
            "typeId": "tax-category",
            "id": "e4eaff1f-e8e2-4343-88c8-4fe07496debc"
        },
        "state": {
            "typeId": "state",
            "id": "ce2ca9a9-5a71-4e23-a8aa-547695709c51"
        },
        "createdAt": "2022-06-14T07:17:24.014Z",
        "lastModifiedAt": "2022-07-05T09:24:20.843Z"
    }
]
export default products;