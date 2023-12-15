import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Alert {
  name: string;
  email: string;
  phone: string;
  message: string;
}
declare var mapboxgl: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  private popupTimer: any;

  ngOnInit() {
    // Initialize the map
    const map = L.map('map').setView([13.035396, 80.1815671], 17);

    // Add a tile layer (you can use various tile providers)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Add a marker
    const marker = L.marker([13.035396, 80.1815671]).addTo(map);

    // Customize popup content with a link to Google Maps
    const popupContent = `
      <p>3-7, Om Eswaran St, Thirumalai Nagar, Thiru Nagar, Nesapakkam, Chennai, Tamil Nadu 600089</p>
      <a href="https://www.google.com/maps/dir/?api=1&destination=13.035396,80.1815671" target="_blank">Get Directions</a>
    `;

    // Set up a mouseover event on the marker to show the popup
    marker.bindPopup(popupContent);

    marker.on('mouseover', (e) => {
      clearTimeout(this.popupTimer); // Clear any existing timers

      // Show the popup immediately
      marker.openPopup();

      // Set a timer to close the popup after a delay (e.g., 5000 milliseconds = 5 seconds)
      this.popupTimer = setTimeout(() => {
        marker.closePopup();
      }, 5000); // Adjust the delay as needed
    });

    // Set up a mouseout event on the marker to clear the timer
    marker.on('mouseout', (e) => {
      clearTimeout(this.popupTimer);
    });
  }

  formData: FormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  alert: Alert = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  submitForm() {
    // Reset previous validation messages
    this.alert = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };

    // Add your form validation logic here
    if (!this.validateForm()) {
      return;
    }

    // If validation passes, you can send the data to the server or perform any other actions
    console.log('Form submitted:', this.formData);

    // Clear the form fields after successful submission
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };

    // You can use Angular HttpClient to send the form data to your server for email handling
    // Example: this.http.post('/api/send-email', this.formData).subscribe(response => {...});
  }

  validateForm(): boolean {
    let isValid = true;

    // Validation for name (only alphabets)
    if (!/^[a-zA-Z]+$/.test(this.formData.name)) {
      this.alert.name = 'Enter a valid username (only alphabets).';
      isValid = false;
    }

    // Validation for email (alphabets, numbers, @, and ends with gmail.com)
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(this.formData.email)) {
      this.alert.email = 'Enter a valid Gmail account email address.';
      isValid = false;
    }

    // Validation for phone (only numbers)
    if (!/^\d+$/.test(this.formData.phone)) {
      this.alert.phone = 'Enter a valid phone number (only numbers).';
      isValid = false;
    }

    // Validation for message (minimum one line)
    if (this.formData.message.trim().length < 1) {
      this.alert.message = 'Enter a message.';
      isValid = false;
    }

    return isValid;
  }

  isFieldInvalid(field: keyof Alert): boolean {
    return this.alert[field] !== '';
  }
}
