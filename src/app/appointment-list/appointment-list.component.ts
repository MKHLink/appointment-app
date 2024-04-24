import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{
  
  newAppointmentTitle:string = "";
  newAppointmentDate: Date = new Date();
  
  appointments: Appointment[] = [];

  ngOnInit(): void {
    let savedApointments = localStorage.getItem("appointments");
    this.appointments = savedApointments ? JSON.parse(savedApointments) : [];
  }
  

  addAppointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment: Appointment = {
        id: Date.now(),
        name: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments",JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(index: number){
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments",JSON.stringify(this.appointments));
  }
}
