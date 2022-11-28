import classnames from 'classnames';

export default function Paragraph({ content, addClassNames } : { content : any, addClassNames? : any }){
    return(
        <p className={classnames(
            "text-white text-xl",
            addClassNames
        )}>
        {content}
    </p>
    );
}