import { Routes } from '@angular/router';

import { RegistrationComponent } from '../components/registration/registration.component';
import { TeacherRegistrationComponent } from '../components/teacher-registration/teacher-registration.component';

export const routes: Routes = [
  { path: 'teacher',  component: TeacherRegistrationComponent },
  { path: 'student',     component: RegistrationComponent },
  { path:"", component: RegistrationComponent}
];
