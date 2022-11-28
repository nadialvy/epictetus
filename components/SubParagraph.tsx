import classnames from 'classnames';

export default function SubParagraph({ content, addClassNames, needOpacity } : { content : any, addClassNames? : any, needOpacity : boolean }){
    const isNeedOpacity = needOpacity ? "text-opacity-50" : "";

    return(
        <p className={classnames(
            "text-white text-sm font-thin tracking-widest",
            addClassNames,
            isNeedOpacity
        )}>
            {content}
        </p>
    );
}