import React, { useState } from 'react'
import CardRadio from '../../../components/cardRadio'
import InputCheckbox from '../../../components/inputCheckbox';
import { useForm } from '../../../hooks/useForm';
import { forwardRef, useImperativeHandle } from "react";



export const BillingMethod = forwardRef((props, ref) => {
    const {form, err, inputChange, submit} = useForm({
        address:"",
        firstName: "",
        lastName: "",
        email: "",
        password:"",
        zipCode:"",
        phone:"",
        country:"",
        city:"",
    });
    const submitMethod = () => { 
        // e.preventDefault();
        let obj = {};
        if(!obj.selecOption){
            obj="check vao 1 trong 2 o checkbox"
            // seterr=("check vao 1 trong 2 o checkbox")
        }
        seterr(obj);

        if (selecOption == "FedEx" || selecOption == "DHL") {
            seterr("")
            alert("thanh cong")
        }


        
    }
    useImperativeHandle(ref, () => {
        return {
            form, err, inputChange, submit, submitMethod
        }
    }, [form, err, inputChange, submit, submitMethod])
    const method = [ 
        {
        radio: 'FedEx',
        price: "+32 USD",
        title: "Additional price",
        img: <svg width="54" height="16" viewBox="0 0 54 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.9625 5.6377L47.1961 8.01844L49.3464 5.6377H53.9381L49.4507 10.5181L53.9996 15.4385H49.2226L47.0101 13.0389L44.8177 15.4385H40.2051L44.7142 10.5385L40.2051 5.6377H44.9625Z" fill="#F85604"/>
        <path d="M40.2077 5.63776V8.94918H35.1008V11.9878H40.2077V15.4385H31.3477V0H40.2077V3.44127H35.1008V5.63776H40.2077Z" fill="#F85604"/>
        <path d="M27.6092 0V6.31818H27.568C26.74 5.39838 25.7064 5.07848 24.5071 5.07848C22.05 5.07848 20.199 6.69466 19.5494 8.83021C18.8077 6.47704 16.8966 5.03423 14.063 5.03423C11.7619 5.03423 9.9446 6.0331 8.99657 7.66088V5.63776H4.2399V3.44127H9.43084V0H0V15.4385H4.2399V8.94918H8.4663C8.3403 9.42576 8.27279 9.93644 8.27279 10.4754C8.27279 13.6954 10.8169 15.9558 14.063 15.9558C16.7931 15.9558 18.5924 14.7161 19.5434 12.4565H15.9096C15.4183 13.1361 15.0455 13.3371 14.063 13.3371C12.9237 13.3371 11.9412 12.3759 11.9412 11.2363H19.3402C19.6612 13.7941 21.7215 16 24.5484 16C25.7679 16 26.8847 15.4197 27.5672 14.4404H27.6085V15.44H31.3459V0H27.6092ZM12.0597 8.99488C12.2952 8.01415 13.082 7.37362 14.0638 7.37362C15.1445 7.37362 15.8908 7.99456 16.0873 8.99488C16.1698 8.99488 12.0597 8.99488 12.0597 8.99488ZM25.3404 13.0883C23.9626 13.0883 23.1061 11.8464 23.1061 10.5501C23.1061 9.16462 23.8509 7.83207 25.3404 7.83207C26.8847 7.83207 27.4997 9.16462 27.4997 10.5501C27.4997 11.8638 26.848 13.0883 25.3404 13.0883Z" fill="#2B017B"/>
        </svg>
        },
        {
        radio: 'DHL',
        price: "+15 USD",
        title: "Additional price",
        img: <svg width="93" height="14" viewBox="0 0 93 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.9852 5.20536C29.5788 5.79118 28.8989 6.80961 28.485 7.40444C28.275 7.70693 27.8956 8.25613 29.1534 8.25613C30.4842 8.25613 35.7759 8.25613 35.7759 8.25613C35.7759 8.25613 36.8432 6.71047 37.7381 5.41772C38.9551 3.65913 37.8434 0 33.492 0C29.5974 0 16.3555 0 16.3555 0L13.3842 4.29734C13.3842 4.29734 28.7877 4.29734 29.5783 4.29734C30.3959 4.29734 30.3848 4.62855 29.9852 5.20536ZM25.1201 9.31625C23.8622 9.31625 24.2417 8.76591 24.4517 8.46343C24.8655 7.86859 25.5566 6.86087 25.963 6.27505C26.3631 5.69824 26.3737 5.36702 25.555 5.36702C24.765 5.36702 18.1488 5.36702 18.1488 5.36702L12.1814 14C12.1814 14 22.8394 14 26.734 14C31.5405 14 34.2165 10.52 35.0414 9.31681C35.0414 9.31625 26.4504 9.31625 25.1201 9.31625ZM34.5869 14H43.1239L46.3603 9.31568L37.8243 9.31681C37.8217 9.31625 34.5869 14 34.5869 14ZM56.6134 0L53.3389 4.73445H49.5289L52.8018 0H44.2674L38.5577 8.25613H59.4387L65.1468 0H56.6134ZM46.9339 14H55.4678L58.7058 9.31681H50.1719C50.1687 9.31625 46.9339 14 46.9339 14ZM0 11.1638V12.1586H11.8893L12.5762 11.1638H0ZM13.8541 9.31625H0V10.3099H13.1657L13.8541 9.31625ZM0 14H10.6156L11.2993 13.0109H0V14ZM80.4715 12.158H93V11.1633H81.1594L80.4715 12.158ZM79.1988 14H93V13.0109H79.882L79.1988 14ZM82.4352 9.31625L81.7489 10.311H93V9.31625H82.4352ZM71.2571 8.25613L76.9662 0H67.9276C67.9244 0 62.2141 8.25613 62.2141 8.25613H71.2571ZM61.4823 9.31625C61.4823 9.31625 60.8584 10.2237 60.5552 10.6608C59.4836 12.202 60.4314 14 63.9292 14C67.9699 14 77.6351 14 77.6351 14L80.8731 9.31681H61.4823V9.31625Z" fill="#D50029"/>
        </svg>
        },
    ];
    const  [errr, seterr] = useState("")
    const [selecOption, setSelecOption] = useState()
    console.log(`selecOption`, selecOption)
    

    return (
        <div className="container__method">
                    <h2 className="title__item">Billing method</h2>
                   <p className="sub__item">Please enter your payment method</p>
                    {method.map((e,i)  => 
                       <InputCheckbox 
                        key={i}
                        radio={e.radio}
                        price={e.price} 
                        title={e.title}
                        img={e.img}
                        onSelect={setSelecOption} isSelected={ e.radio === selecOption}
                        />)} {errr && <p>{errr}</p>}
                        <button onClick={submitMethod}>submit</button>
                      
        </div> 
    )
})
