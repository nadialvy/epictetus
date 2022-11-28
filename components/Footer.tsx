import SubParagraph from "./SubParagraph";

export default function Footer(){
    return(
        <footer className="pt-16 pb-2 text-center">
            <SubParagraph
            content="Copyright (c) 2021 - Design By Nauval."
            needOpacity={true}
            />
      </footer>
    );
}