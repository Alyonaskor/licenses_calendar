import { render } from 'react-dom';

import * as React from 'react';
import { ScheduleComponent, RecurrenceEditorComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SampleBase } from './sample-base';
import {doctorsEventData} from '../data/dummy';

class EditorTemplate extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], doctorsEventData, null, true);
  }
  onPopupOpen(args) {
    if(args.type === 'QuickInfo') {
      var dialogObj = args.element.ej2_instances[0];
      dialogObj.hide();
      var currentAction = args.target.classList.contains('e-work-cells') ? 'Add' : 'Save';
      this.scheduleObj.openEditor(args.data, currentAction);
    }
  }
  onEventRendered(args) {
    switch (args.data.EventType) {
      case 'Requested':
        args.element.style.backgroundColor = '#F57F17';
        break;
      case 'Confirmed':
        args.element.style.backgroundColor = '#7fa900';
        break;
      case 'New':
        args.element.style.backgroundColor = '#8e24aa';
        break;
    }
  }
  onActionBegin(args) {
    if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
      let data = args.data instanceof Array ? args.data[0] : args.data;
      if (!this.scheduleObj.isSlotAvailable(data.StartTime, data.EndTime)) {
        args.cancel = true;
      }
    }
  }
  editorTemplate(props) {
    return ((props !== undefined) ? <table className="custom-event-editor" style={{ width: '100%', cellpadding: '5' }}><tbody>
      <tr><td className="e-textlabel">Summary</td><td style={{ colspan: '4' }}>
        <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} />
      </td></tr>
      <tr><td className="e-textlabel">Status</td><td style={{ colspan: '4' }}>
        <DropDownListComponent id="EventType" placeholder='Chooses statustypesss' data-name='EventType' className="e-field" style={{ width: '100%' }} dataSource={['New', 'Requested', 'Confirmed']}>
        </DropDownListComponent>
      </td></tr>
      <tr><td className="e-textlabel">Status</td><td style={{ colspan: '4' }}>
        <DropDownListComponent id="EventType" placeholder='Chooses statustypesss' data-name='EventType' className="e-field" style={{ width: '100%' }} dataSource={['New', 'Requested', 'Confirmed']}>
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
  render() {
    return (<div className='schedule-control-section'>
      <div className='col-lg-12 control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent width='100%' height='650px' selectedDate={new Date(2018, 1, 15)} ref={schedule => this.scheduleObj = schedule} eventSettings={{ dataSource: this.data }} editorTemplate={this.editorTemplate.bind(this)} actionBegin={this.onActionBegin.bind(this)} eventRendered={this.onEventRendered.bind(this)} popupOpen={this.onPopupOpen.bind(this)}>
            <ViewsDirective>
              <ViewDirective option='Day' />
              <ViewDirective option='Week' />
              <ViewDirective option='WorkWeek' />
              <ViewDirective option='Month' />
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Resize, DragAndDrop]} />
          </ScheduleComponent>
        </div>
      </div>
    </div>);
  }
}


export default EditorTemplate