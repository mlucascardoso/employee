using company from '../db/cds/employee';

@requires: 'authenticated-user'
service CompanyService {
    entity Employee as projection on company.Employee;
}
