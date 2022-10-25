import { FormEvent, useRef } from 'react';

const EventSearch = (props: any) => {

  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  const submitSearchHandler = (event: FormEvent) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current?.value;
    const selectedMonth = monthInputRef.current?.value;
  }
  return (
    <div className="flex justify-center">
      <form onSubmit={submitSearchHandler} className="my-4 p-4 bg-slate-100 max-w-4xl rounded-sm shadow-md">
        <div className="flex gap-8">
          <select className="select" id='year' ref={yearInputRef}>
            <option disabled selected>Year</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>

          </select>
          <select className="select" id='year' ref={monthInputRef}>
            <option disabled selected>Month</option>
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>Match</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
          <button type='submit' className="btn btn-primary">Find Event</button>
        </div>
      </form>
    </div>
  )
}
export default EventSearch