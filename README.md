# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch` 
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.

## How to create default-env.json file

- run `cds build`
- `cd gen/db`
- `hana-cli copy2DefaultEnv`
- `mv default-env.json ../../`

This will create a default-env.json in your project root folder with hana credentials. After that, you should run the following command

- cf service-key bm-importacao-xsuaa-service default

Then copy the result to your default-env.json.

So far your default-env.json file should be like this:
```json
{
    "VCAP_SERVICES": {
        "xsuaa": [
            { your-xsuaa-credentials-object-here }
        ],
        "hana": [
            { your-hana-credentials-object-here }
        ]
    }
}
```

After that, you can copy this default-env.json file to your app folder by running `cp default-env.json app`

In app folder, open the env file and add destinations configurations to it, like this:
```json
{
     "destinations": [
        {
            "name": "srv-api",
            "url": "http://localhost:4004",
            "forwardAuthToken": true
        }
    ],
    "VCAP_SERVICES": {
        "xsuaa": [
            { your-xsuaa-credentials-object-here }
        ],
        "hana": [
            { your-hana-credentials-object-here }
        ]
    }
}
```

> Note: this only works on SAP Business Application Studio (BAS)