import consec from './assets/consec.jpg'

export interface EIpropos{
    titre : string;
    source: string;
    img: string;
    description:string;
    personnalisation:string;
}

export function Homecard(props:EIpropos) {
    return(
        <><div className={props.personnalisation}>
            <div className='mb-3'>
                <h1 className='text-2xl font-bold font-sans'>{props.titre}</h1>
            </div>
            
            <div className='text-left mb-3'>
                <p className='text-xs p-0 text-red-600 font-sans'>{props.source}</p>
            </div>
            
            <div className='mb-5'>
                <img src={props.img} alt="" />
            </div>
            <div className='mb-4'>
                <p className='text-base font-sans'>{props.description}</p>
            </div>
            <div className='p-0'>
                <a href="" className='text-sm m-5 font-sans text-red-600' >Read more</a>
            </div>
            </div>
        </>
    )
}