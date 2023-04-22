import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { TbLicense } from 'react-icons/tb';
import { IoMdContacts } from 'react-icons/io';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';

export const gridLicenseStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeLicense = (props) => (
  <div className="flex items-center justify-center gap-4">
    <span>{props.License}</span>
  </div>
);

export const employeesGrid = [
  { field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '50',
    textAlign: 'Center' },

  { headerText: 'Employee',
    width: '100',
    template: gridEmployeeProfile,
    textAlign: 'Center' },
  { field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
 
  { headerText: 'License',
    width: '150',
    textAlign: 'Center',
    template: gridEmployeeLicense }
  
];

export const links = [
  {
    links: [
      {
        name: 'licenses',
        icon: <TbLicense />,
      },
      {
        name: 'employees',
        icon: <IoMdContacts />,
      },
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const licensesGrid = [
  {
    field: 'LicenseAccount',
    headerText: 'License Account',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  { field: 'AssignedTo',
    headerText: 'Assigned To',
    width: '150',
    textAlign: 'Center',
  },
  {
    headerText: 'Status',
    template: gridLicenseStatus,
    field: 'Status',
    textAlign: 'Center',
    width: '120',
  },
];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio', 
    License: 'Skype dummy license #1',
    EmployeeImage:
    avatar3,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    
    License: 'Skype dummy license #1',
   
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    
    License: 'Skype dummy license #1',
   
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    
    License: 'Skype dummy license #1',
    
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    
    License: 'Skype dummy license #1',
    
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    
    License: 'Skype dummy license #1',
   
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    
    License: 'Skype dummy license #1',
   
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    
    License: 'Skype dummy license #10',
   
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    License: 'Skype dummy license #1',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio', 
    License: 'Skype dummy license #1',
    EmployeeImage:
    avatar3,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    
    License: 'Skype dummy license #1',
   
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    License: 'Skype dummy license #1',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    License: 'Skype dummy license #1', 
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    License: 'Skype dummy license #1',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    License: 'Skype dummy license #1',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    License: 'Skype dummy license #1',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    License: 'Skype dummy license #10',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    License: 'Skype dummy license #1',
    EmployeeImage:
      avatar3,
  },
];

export const licensesData = [
  {
    OrderID: 10248,
    AssignedTo: 'Vinet',

    TotalAmount: 32.38,
    LicenseAccount: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
  },
  {
    OrderID: 345653,
    AssignedTo: 'Carson Darrin',
    TotalAmount: 56.34,
    LicenseAccount: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
  },
  {
    OrderID: 390457,
    AssignedTo: 'Fran Perez',
    TotalAmount: 93.31,
    LicenseAccount: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 893486,
    AssignedTo: 'Anika Viseer',
    TotalAmount: 93.31,
    LicenseAccount: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
  },
  {
    OrderID: 748975,
    AssignedTo: 'Miron Vitold',
    TotalAmount: 23.99,
    LicenseAccount: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
  },
  {
    OrderID: 94757,
    AssignedTo: 'Omar Darobe',
    TotalAmount: 95.99,
    LicenseAccount: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
  },
  {
    OrderID: 944895,
    AssignedTo: 'Lulia albu',
    TotalAmount: 17.99,
    LicenseAccount: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 845954,
    AssignedTo: 'Penjani',
    TotalAmount: 59.99,
    LicenseAccount: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
  },
  {
    OrderID: 845954,
    AssignedTo: 'Jie Yan',
    TotalAmount: 87.99,
    LicenseAccount: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
  },
  {
    OrderID: 874534,
    AssignedTo: 'Danai',
    TotalAmount: 122.99,
    LicenseAccount: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
  },
  {
    OrderID: 38489,
    AssignedTo: 'Miron',
    TotalAmount: 87.99,
    LicenseAccount: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 24546,
    AssignedTo: 'Frank',
    TotalAmount: 84.99,
    LicenseAccount: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
  },
  {
    OrderID: 874534,
    AssignedTo: 'Danai',
    TotalAmount: 122.99,
    LicenseAccount: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
  },
  {
    OrderID: 10248,
    AssignedTo: 'Vinet',

    TotalAmount: 32.38,
    LicenseAccount: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
  },
  {
    OrderID: 345653,
    AssignedTo: 'Carson Darrin',
    TotalAmount: 56.34,
    LicenseAccount: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Space Center USA',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-18T05:30:00.000Z',
    EndTime: '2021-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    Location: 'Africa',
    StartTime: '2021-01-20T05:30:00.000Z',
    EndTime: '2021-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Best Photography 2021',
    Location: 'London',
    StartTime: '2021-01-21T04:00:00.000Z',
    EndTime: '2021-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: 'Smarter Puppies',
    Location: 'Sweden',
    StartTime: '2021-01-08T04:30:00.000Z',
    EndTime: '2021-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    Location: 'Space Center USA',
    StartTime: '2021-01-06T05:00:00.000Z',
    EndTime: '2021-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Aliens vs Humans',
    Location: 'Research Center of USA',
    StartTime: '2021-01-05T04:30:00.000Z',
    EndTime: '2021-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-19T04:00:00.000Z',
    EndTime: '2021-01-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    Subject: 'Sky Gazers',
    Location: 'Alaska',
    StartTime: '2021-01-22T05:30:00.000Z',
    EndTime: '2021-01-22T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-11T00:00:00.000Z',
    EndTime: '2021-01-11T02:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    Location: 'Space Center USA',
    StartTime: '2021-01-11T11:30:00.000Z',
    EndTime: '2021-01-11T13:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    Location: 'San Fransisco',
    StartTime: '2021-01-14T00:30:00.000Z',
    EndTime: '2021-01-14T02:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T10:30:00.000Z',
    EndTime: '2021-01-14T12:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T08:30:00.000Z',
    EndTime: '2021-01-10T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-12T09:00:00.000Z',
    EndTime: '2021-01-12T10:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    Subject: 'Sky Gazers',
    Location: 'Greenland',
    StartTime: '2021-01-15T09:00:00.000Z',
    EndTime: '2021-01-15T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-16T07:00:00.000Z',
    EndTime: '2021-01-16T09:00:00.000Z',
    CategoryColor: '#7fa900',
  },
];

export const doctorsEventData = [{
  "Id": 1,
  "Subject": "Surgery - Andrew",
  "EventType": "Confirmed",
  "StartTime": "2018-02-12T03:30:00.000Z",
  "EndTime": "2018-02-12T04:30:00.000Z"
}, {
  "Id": 2,
  "Subject": "Consulting - John",
  "EventType": "Confirmed",
  "StartTime": "2018-02-12T04:30:00.000Z",
  "EndTime": "2018-02-12T06:00:00.000Z"
}, {
  "Id": 3,
  "Subject": "Therapy - Robert",
  "EventType": "Requested",
  "StartTime": "2018-02-12T06:00:00.000Z",
  "EndTime": "2018-02-12T07:00:00.000Z"
}, {
  "Id": 4,
  "Subject": "Observation - Steven",
  "EventType": "Confirmed",
  "StartTime": "2018-02-12T07:00:00.000Z",
  "EndTime": "2018-02-12T08:00:00.000Z"
}, {
  "Id": 5,
  "Subject": "Extraction - Nancy",
  "EventType": "Confirmed",
  "StartTime": "2018-02-12T08:00:00.000Z",
  "EndTime": "2018-02-12T09:30:00.000Z"
}, {
  "Id": 6,
  "Subject": "Surgery - Paul",
  "EventType": "New",
  "StartTime": "2018-02-13T03:30:00.000Z",
  "EndTime": "2018-02-13T04:30:00.000Z"
}, {
  "Id": 7,
  "Subject": "Extraction - Josephs",
  "EventType": "Confirmed",
  "StartTime": "2018-02-13T04:30:00.000Z",
  "EndTime": "2018-02-13T05:30:00.000Z"
}, {
  "Id": 8,
  "Subject": "Consulting - Mario",
  "EventType": "Confirmed",
  "StartTime": "2018-02-13T05:30:00.000Z",
  "EndTime": "2018-02-13T06:30:00.000Z"
}, {
  "Id": 9,
  "Subject": "Therapy - Saveley",
  "EventType": "Requested",
  "StartTime": "2018-02-13T06:30:00.000Z",
  "EndTime": "2018-02-13T08:00:00.000Z"
}, {
  "Id": 10,
  "Subject": "Observation - Cartrain",
  "EventType": "Confirmed",
  "StartTime": "2018-02-13T08:00:00.000Z",
  "EndTime": "2018-02-13T10:00:00.000Z"
}, {
  "Id": 11,
  "Subject": "Consulting - Yang",
  "EventType": "New",
  "StartTime": "2018-02-14T03:30:00.000Z",
  "EndTime": "2018-02-14T04:30:00.000Z"
}, {
  "Id": 12,
  "Subject": "Observation - Michael",
  "EventType": "New",
  "StartTime": "2018-02-14T04:30:00.000Z",
  "EndTime": "2018-02-14T06:00:00.000Z"
}, {
  "Id": 13,
  "Subject": "Surgery - Roland",
  "EventType": "Confirmed",
  "StartTime": "2018-02-14T06:00:00.000Z",
  "EndTime": "2018-02-14T07:00:00.000Z"
}, {
  "Id": 14,
  "Subject": "Extraction - Francisco",
  "EventType": "Requested",
  "StartTime": "2018-02-14T07:00:00.000Z",
  "EndTime": "2018-02-14T08:00:00.000Z"
}, {
  "Id": 15,
  "Subject": "Therapy - Henriette",
  "EventType": "Confirmed",
  "StartTime": "2018-02-14T08:00:00.000Z",
  "EndTime": "2018-02-14T09:30:00.000Z"
}, {
  "Id": 16,
  "Subject": "Observation - Bernardo",
  "EventType": "Confirmed",
  "StartTime": "2018-02-15T03:30:00.000Z",
  "EndTime": "2018-02-15T04:30:00.000Z"
}, {
  "Id": 17,
  "Subject": "Therapy - Wilson",
  "EventType": "Confirmed",
  "StartTime": "2018-02-15T04:30:00.000Z",
  "EndTime": "2018-02-15T05:30:00.000Z"
}, {
  "Id": 18,
  "Subject": "Consulting - Horst",
  "EventType": "Confirmed",
  "StartTime": "2018-02-15T05:30:00.000Z",
  "EndTime": "2018-02-15T06:30:00.000Z"
}, {
  "Id": 19,
  "Subject": "Surgery - Limeira",
  "EventType": "Requested",
  "StartTime": "2018-02-15T06:30:00.000Z",
  "EndTime": "2018-02-15T08:00:00.000Z"
}, {
  "Id": 20,
  "Subject": "Observation - Victoria",
  "EventType": "Requested",
  "StartTime": "2018-02-15T08:00:00.000Z",
  "EndTime": "2018-02-15T10:00:00.000Z"
}, {
  "Id": 21,
  "Subject": "Extraction - Afonso",
  "EventType": "Confirmed",
  "StartTime": "2018-02-16T03:30:00.000Z",
  "EndTime": "2018-02-16T04:30:00.000Z"
}, {
  "Id": 22,
  "Subject": "Extraction - Paula",
  "EventType": "New",
  "StartTime": "2018-02-16T04:30:00.000Z",
  "EndTime": "2018-02-16T05:30:00.000Z"
}, {
  "Id": 23,
  "Subject": "Observation - George",
  "EventType": "Requested",
  "StartTime": "2018-02-16T05:30:00.000Z",
  "EndTime": "2018-02-16T06:30:00.000Z"
}, {
  "Id": 24,
  "Subject": "Therapy - Smith",
  "EventType": "New",
  "StartTime": "2018-02-16T06:30:00.000Z",
  "EndTime": "2018-02-16T08:00:00.000Z"
}, {
  "Id": 25,
  "Subject": "Surgery - Jennifer",
  "EventType": "New",
  "StartTime": "2018-02-16T08:00:00.000Z",
  "EndTime": "2018-02-16T10:00:00.000Z"
}]

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

