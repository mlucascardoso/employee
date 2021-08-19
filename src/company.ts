export namespace company {
    export interface Employee extends Cuid, Managed {
        firstName: string;
        lastName: string;
        age: string;
    }

    export enum Entity {
        Employee = "company.Employee"
    }

    export enum SanitizedEntity {
        Employee = "Employee"
    }
}

export namespace sap.common {
    export interface CodeList {
        name: string;
        descr: string;
    }

    export interface Countries extends sap.common.CodeList {
        code: string;
    }

    export interface Currencies extends sap.common.CodeList {
        code: string;
        symbol: string;
    }

    export interface Languages extends sap.common.CodeList {
        code: string;
    }

    export enum Entity {
        CodeList = "sap.common.CodeList",
        Countries = "sap.common.Countries",
        Currencies = "sap.common.Currencies",
        Languages = "sap.common.Languages"
    }

    export enum SanitizedEntity {
        CodeList = "CodeList",
        Countries = "Countries",
        Currencies = "Currencies",
        Languages = "Languages"
    }
}

export namespace CompanyService {
    export interface Employee {
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        ID: string;
        firstName: string;
        lastName: string;
        age: string;
    }

    export enum Entity {
        Employee = "CompanyService.Employee"
    }

    export enum SanitizedEntity {
        Employee = "Employee"
    }
}

export type User = string;

export interface Cuid {
    ID: string;
}

export interface Managed {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
}

export interface Temporal {
    validFrom: Date;
    validTo: Date;
}

export enum Entity {
    Cuid = "cuid",
    Managed = "managed",
    Temporal = "temporal"
}

export enum SanitizedEntity {
    Cuid = "Cuid",
    Managed = "Managed",
    Temporal = "Temporal"
}
