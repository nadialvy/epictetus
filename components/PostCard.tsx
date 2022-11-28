import Paragraph from "./Paragraph";
import Profile from "./Profile";
import SubParagraph from "./SubParagraph";

export default function PostCard(
    { thumbnail, dateContent, title, description, authorImg, authorName, authorJob } :
    { thumbnail : any, dateContent : any, title : any, description : any, authorImg : any, authorName : any, authorJob : any }
){
    return(
        <>
            <img src={thumbnail} alt="" className="mb-2"/>
            <SubParagraph
                content={dateContent}
                addClassNames="mb-2 mt-4"
                needOpacity={true}
            />
            <Paragraph
                content={title}
            />
            <SubParagraph
                content={description}
                addClassNames="mb-6 mt-4"
                needOpacity={true}
            />
            <Profile
                img={authorImg}
                name={authorName}
                job={authorJob}
                addClassNames="items-end"
            />
        </>
    );
}