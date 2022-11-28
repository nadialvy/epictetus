import SubParagraph from "./SubParagraph";

export default function Profile({ img, name, job } : { img : any, name : any, job : any }){
    return(
        <div className="flex">
            <img src={img} alt="" className="w-12 mr-4"/>
            <div>
            <SubParagraph content={name} needOpacity={false}/>
            <SubParagraph content={job} addClassNames="mb-2" needOpacity={true}/>
            </div>
        </div>
    );
}