import React from 'react'
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';

export default function CreateAppointment({ newEvent, setNewEvent, handleAddEvent }) {

    return (
        <>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <form name="myForm">
                            <div className="mb-3">
                                <label htmlFor="Title" className="form-label">Appoint Title</label>
                                <input type="text" className="form-control" id="Title"
                                    placeholder="Appoint title"
                                    value={newEvent.title} min={4} max={40} required
                                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="fName" aria-describedby="fName"
                                    placeholder="First Name"
                                    value={newEvent.fName} min={4} max={40} required
                                    onChange={(e) => setNewEvent({ ...newEvent, fName: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="lName" aria-describedby="fName"
                                    placeholder="Last Name"
                                    value={newEvent.lName} min={4} max={40} required
                                    onChange={(e) => setNewEvent({ ...newEvent, lName: e.target.value })} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" pattern="[^ @]*@[^ @]*" className="form-control" id="email" aria-describedby="email"
                                    placeholder="Email Address"
                                    value={newEvent.email} required
                                    onChange={(e) => setNewEvent({ ...newEvent, email: e.target.value })} />
                            </div>
                            <div className="input-group mb-3">
                                <label htmlFor="gender" className="form-label">Gender </label>
                                <select className="form-select" style={{ marginLeft: '30px' }}>
                                    <option defaultValue={"Choose..."}>Choose...</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label">Age</label>
                                <input type="number" className="form-control" id="age" aria-describedby="age"
                                    placeholder="Age"
                                    value={newEvent.age}
                                    onChange={(e) => setNewEvent({ ...newEvent, age: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Start Date" className="form-label" style={{ marginRight: '30px' }}>Start Date</label>
                                <DatePicker placeholderText='Start Date'
                                    selected={newEvent.start} required
                                    onChange={(start) => setNewEvent({ ...newEvent, start })}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="End Date" className="form-label" style={{ marginRight: '32px' }}>End Date</label>
                                <DatePicker placeholderText='End Date'
                                    selected={newEvent.end} required
                                    onChange={(end) => setNewEvent({ ...newEvent, end })}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Time" className="form-label" style={{ marginRight: '30px' }}>Time </label>
                                <TimePicker required
                                    onChange={(time) => setNewEvent({ ...newEvent, time })} value={newEvent.time} />
                            </div>
                            <button type="submit" className="btn btn-secondary" onClick={handleAddEvent} data-bs-dismiss="modal">Submit</button>
                            {/* <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleAddEvent}>Submit</button> */}
                        </form>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle"
                    style={{ background: '#fff', color: '#000', marginRight: '50px' }}>
                    Creacte Appointment
                </button>
            </div>
        </>
    )
}
