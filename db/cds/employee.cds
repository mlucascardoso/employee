using {
    managed,
    cuid
} from '@sap/cds/common';

context company {
    entity Employee : managed, cuid {
        firstName : String @(Common.FieldControl : #Mandatory);
        lastName  : String @(Common.FieldControl : #Mandatory);
        age       : String @(Common.FieldControl : #Mandatory);
    }
}
