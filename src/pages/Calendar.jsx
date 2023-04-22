import React, { useState } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop, RecurrenceEditorComponent } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent, DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Internationalization } from '@syncfusion/ej2-base';
import { scheduleData, employeesData, licensesData } from '../data/dummy';
import { Header } from '../components';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;
const instance = new Internationalization();
const majorSlotTemplate =(props) => {
  return (<div>{instance.formatDate(props.date, { skeleton: 'Hm' })}</div>);
}

const Scheduler = () => {
  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };
 const editorTemplate =(props)  =>{
  return ((props !== undefined) ? <table className="custom-event-editor" style={{ width: '100%', cellpadding: '5' }}><tbody>
    {/* <tr><td className="e-textlabel">Summary</td><td style={{ colspan: '4' }}>
      <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} />
    </td></tr> */}
    <tr><td className="e-textlabel">Teacher</td><td style={{ colspan: '4' }}>
      <DropDownListComponent id="EventType" placeholder='Choose teacher' data-name='EventType' className="e-field" style={{ width: '100%' }} dataSource={employeesData.map((em)=> em.Name)}>
      </DropDownListComponent>
    </td></tr>
    <tr><td className="e-textlabel">License</td><td style={{ colspan: '4' }}>
      <DropDownListComponent id="EventType" placeholder='Choose license' data-name='EventType' className="e-field" style={{ width: '100%' }} dataSource={licensesData.map((lic)=> lic.LicenseAccount)}>
      </DropDownListComponent>
    </td></tr>
    <tr><td className="e-textlabel">From</td><td style={{ colspan: '4' }}>
      <DateTimePickerComponent id="StartTime" format='dd/MM/yy hh:mm a' data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
    </td></tr>
    <tr><td className="e-textlabel">To</td><td style={{ colspan: '4' }}>
      <DateTimePickerComponent id="EndTime" format='dd/MM/yy hh:mm a' data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
    </td></tr>
    <tr><td className="e-textlabel">Recurrence</td><td colSpan={4}>
        <RecurrenceEditorComponent ref={recurrObject => recurrObject = recurrObject} id='RecurrenceEditor'></RecurrenceEditorComponent>
      </td></tr>
    <tr><td className="e-textlabel">Reason</td><td style={{ colspan: '4' }}>
      <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
    </td></tr></tbody></table> : <div></div>);
}

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        ref={(schedule) => setScheduleObj(schedule)}
        selectedDate={new Date(2021, 0, 10)}
        startHour='07:00' endHour='24:00'
        timeScale={{enable: true, majorSlotTemplate:majorSlotTemplate}}
        eventSettings={{ dataSource: scheduleData }}
        dragStart={onDragStart}
        editorTemplate={editorTemplate}
        showQuickInfo={false}
      >
        <ViewsDirective>
          { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
      <PropertyPane>
        <table>
          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '100%' }}>
                <DatePickerComponent
                  value={new Date(2021, 0, 10)}
                  showClearButton={false}
                  placeholder="Current Date"
                  floatLabelType="Always"
                  change={change}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </div>
  );
};

export default Scheduler;
