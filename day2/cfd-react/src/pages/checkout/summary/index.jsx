import React from 'react'
import CardSummary from '../../../components/CardSummary'
import './style.scss'
    const summary =[
        {
            titleSummary: "Product title",
            Farm: "Tharamis Farm",
            Freshness: "1 day old",
            img: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3341 1.12662C6.38014 0.980587 6.47155 0.853041 6.59503 0.762504C6.71851 0.671967 6.86764 0.623154 7.02076 0.623154C7.17388 0.623154 7.32301 0.671967 7.44649 0.762504C7.56997 0.853041 7.66138 0.980587 7.70743 1.12662L8.94743 4.93995H12.9474C13.106 4.93395 13.2622 4.98004 13.3921 5.07117C13.5221 5.16231 13.6186 5.29347 13.667 5.44463C13.7153 5.59578 13.7129 5.75862 13.66 5.90825C13.6071 6.05789 13.5067 6.18609 13.3741 6.27328L10.1274 8.62661L11.3674 12.4466C11.4165 12.5921 11.4177 12.7495 11.371 12.8958C11.3242 13.042 11.2319 13.1695 11.1076 13.2596C10.9832 13.3497 10.8333 13.3977 10.6798 13.3965C10.5263 13.3954 10.3771 13.3452 10.2541 13.2533L7.00076 10.8733L3.7541 13.2333C3.6311 13.3252 3.48194 13.3754 3.32839 13.3765C3.17484 13.3777 3.02495 13.3297 2.90061 13.2396C2.77627 13.1495 2.68398 13.022 2.63723 12.8758C2.59049 12.7295 2.59172 12.5721 2.64076 12.4266L3.88076 8.60661L0.634095 6.25328C0.501484 6.16609 0.401063 6.03789 0.348176 5.88825C0.295288 5.73862 0.292843 5.57578 0.341212 5.42463C0.389582 5.27347 0.486108 5.14231 0.616041 5.05117C0.745974 4.96004 0.902169 4.91395 1.06076 4.91995H5.06076L6.3341 1.12662Z" fill="#FDBC15"/>
            </svg>,
            price: "36.99 USD",
            sale: "48.56 USD"
        },
        {
            titleSummary: "Product title",
            Farm: "Tharamis Farm",
            Freshness: "1 day old",
            img: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3341 1.12662C6.38014 0.980587 6.47155 0.853041 6.59503 0.762504C6.71851 0.671967 6.86764 0.623154 7.02076 0.623154C7.17388 0.623154 7.32301 0.671967 7.44649 0.762504C7.56997 0.853041 7.66138 0.980587 7.70743 1.12662L8.94743 4.93995H12.9474C13.106 4.93395 13.2622 4.98004 13.3921 5.07117C13.5221 5.16231 13.6186 5.29347 13.667 5.44463C13.7153 5.59578 13.7129 5.75862 13.66 5.90825C13.6071 6.05789 13.5067 6.18609 13.3741 6.27328L10.1274 8.62661L11.3674 12.4466C11.4165 12.5921 11.4177 12.7495 11.371 12.8958C11.3242 13.042 11.2319 13.1695 11.1076 13.2596C10.9832 13.3497 10.8333 13.3977 10.6798 13.3965C10.5263 13.3954 10.3771 13.3452 10.2541 13.2533L7.00076 10.8733L3.7541 13.2333C3.6311 13.3252 3.48194 13.3754 3.32839 13.3765C3.17484 13.3777 3.02495 13.3297 2.90061 13.2396C2.77627 13.1495 2.68398 13.022 2.63723 12.8758C2.59049 12.7295 2.59172 12.5721 2.64076 12.4266L3.88076 8.60661L0.634095 6.25328C0.501484 6.16609 0.401063 6.03789 0.348176 5.88825C0.295288 5.73862 0.292843 5.57578 0.341212 5.42463C0.389582 5.27347 0.486108 5.14231 0.616041 5.05117C0.745974 4.96004 0.902169 4.91395 1.06076 4.91995H5.06076L6.3341 1.12662Z" fill="#FDBC15"/>
            </svg>,
            price: "36.99 USD",
            sale: "48.56 USD",
        },
    ]
 const Summary = () => {
    return (
        <div className="container__summary">
            <h2>summary card</h2>
            <p className="description">Price can change depending on shipping method and taxes of your state.</p>
            {summary.map((e,i) => <CardSummary key={i}
            {...e}
            />)}
        </div>
    )
}
export default Summary