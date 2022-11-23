class Path {
    constructor() {
        this.home = '/'
        this.headerDoctor = '/listDoctor'
        this.headerClinic = '/listClinic'
        this.headerSpecialist = '/listSpecialist'
        this.auth = '/auth'
        this.login = '/login'
        this.register = '/register'
        this.forgotPassword = '/forgotPassword'
        this.profile = '/profile'
        this.detailDoctor = '/detailDoctor/:id'
        this.detailSpecialist = '/detailSpecialist/:id'
        this.detailHospital = '/detailHospital/:id'
        this.bookAppointment = '/bookAppointment'
        this.system = '/system'
        this.specialistManagement = '/system/specialistManagement'
        this.addSpecialist = '/system/addSpecialist'
        this.editSpecialist = '/system/editSpecialist/:id'
        this.clinicManagement = '/system/clinicManagement'
        this.addClinic = '/system/addClinic'
        this.updateClinic = '/system/updateClinic/:id'
        this.hospitalManagement = '/system/hospitalManagement'
        this.addHospital = '/system/addHospital'
        this.updateHospital = '/system/updateHospital/:id'
        this.patientManagement = '/system/patientManagement'
        this.doctorManagement = '/system/doctorManagement'
        this.addDoctor = '/system/addDoctor'
        this.updateDoctor = '/system/updateDoctor/:id'
    }
}

export const path = new Path()