import Paragraph from "./Paragraph";
import Profile from "./Profile";
import SubParagraph from "./SubParagraph";

export default function FeaturedThumbnail(){
    return(
        <div className="flex items-center max-[767px]:flex-wrap">
            <div className="md:w-7/12 w-full mr-8 max-[767px]:m-8">
                <img src="../featured-thumbnail.png" alt="" className="rounded-lg"/>
            </div>
            <div className="md:w-5/12 w-full max-[767px]:m-8">
                <div className="flex flex-wrap">
                    <SubParagraph content="UI DESIGN • July 2, 2021" addClassNames="mb-4" needOpacity={true} />
                    <Paragraph content="Understanding color theory; the color wheel and finding complementary colors" addClassNames="mb-4"/>
                    <SubParagraph
                        content="Orci eu lobortis elementum nibh tellus. Quam adipiscing vitae proin sagittis nisl rhoncus. Est pellentesque elit ullamcorper dignissim cras. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mi quis hendrerit dolor magna eget est lorem. Donec adipiscing tristique risus nec."
                        addClassNames="mb-4"
                        needOpacity={true}
                    />
                    <Profile
                        img="../author-1.png"
                        name="Alexander Allie"
                        job="UI Designer"
                    />
                </div>
            </div>
        </div>
    );
}