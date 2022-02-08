import React, { useState } from 'react';
import moment from 'moment';


function OwnMessage(props) {
    const { message, ondelete, ondeleteall } = props;
    let [isShow, setHidden] = useState(false);

    return (
        <div className="_chat_middle_box_reciver" key={message?.id}>
            <div className="_chat_middle_box_reciver_area">

                <div className="_chat_middle_message d-flex gap-3 align-items-center">
                    <div className='' >

                        {message.is_read ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-checks" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4287f5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M7 12l5 5l10 -10" />
                                <path d="M2 12l5 5m5 -5l5 -5" />
                            </svg>
                        ) :
                            (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>)
                        }


                    </div>

                    {message.archived || message.deleted ? (
                        <div className='border border-dark px-3 py-2 rounded-pill me-3'>
                            deleted
                        </div>
                    ) : (
                        <div className="_chat_middle_box_sender_txt">
                            <p className="_chat_middle_box_sender_txt_para">{message?.text}</p>
                        </div>
                    )}


                </div>

            </div>
            <div className="_chat_middle_box_time"> <span className="_chat_middle_box_time_txt"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16">
                <circle cx={8} cy={8} r="7.5" stroke="#707584" />
                <path stroke="#707584" strokeLinecap="round" d="M12 9H8.25A.25.25 0 018 8.75V5" />
            </svg>
                {
                    moment(message.timestamp).fromNow()
                }
                <div onClick={() => setHidden(!isShow)} className="_remove_btn_box">
                    <button type="button" className="_remove_btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={4} fill="none" viewBox="0 0 16 4">
                            <circle cx={2} cy={2} r={2} fill="#C4C4C4" transform="rotate(-90 2 2)" />
                            <circle cx={8} cy={2} r={2} fill="#C4C4C4" transform="rotate(-90 8 2)" />
                            <circle cx={14} cy={2} r={2} fill="#C4C4C4" transform="rotate(-90 14 2)" />
                        </svg>
                    </button>
                    {isShow &&
                        <div className="_remove_btn_dropdown _remove_drop">
                            <ul className="_remove_btn_dropdown_list">
                                {message?.deleted ? null :
                                    message.archived ?
                                        (<li className="_remove_btn_dropdown_item" onClick={() => { ondeleteall(message.id) }}>
                                            <button type="button" className="_remove_btn_dropdown_link">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 22 24" fill="none" stroke="#666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>Unsend
                                            </button>
                                        </li>) :
                                        (
                                            <>
                                                <li className="_remove_btn_dropdown_item" onClick={() => { ondeleteall(message.id) }}>
                                                    <button type="button" className="_remove_btn_dropdown_link">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 22 24" fill="none" stroke="#666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>Unsend
                                                    </button>
                                                </li>



                                                <li className="_remove_btn_dropdown_item" onClick={() => { ondelete(message.id) }}>
                                                    <button type="button" className="_remove_btn_dropdown_link">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 22 24" fill="none" stroke="#666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>Delete
                                                    </button>
                                                </li>
                                            </>)}


                            </ul>
                        </div>
                    }
                </div>
            </span>
            </div>
        </div>);
}

export default OwnMessage;
