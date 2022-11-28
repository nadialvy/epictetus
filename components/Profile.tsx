import SubParagraph from "./SubParagraph";
import classnames from 'classnames';

export default function Profile({ img, name, job, addClassNames } : { img : any, name : any, job : any, addClassNames? : any }){
    return(
        <div className={classnames("flex", addClassNames)}>
            <img src={img} alt="" className="w-12 mr-4"/>
            <div>
            <SubParagraph content={name} needOpacity={false}/>
            <SubParagraph content={job} addClassNames="mb-2" needOpacity={true}/>
            </div>
        </div>
    );
}