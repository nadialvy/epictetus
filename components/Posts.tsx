import PostCard from "./PostCard";

export default function Posts(){
    return(
        <div className="flex mt-16 flex-wrap">
            <div className="w-4/12 pr-4">
                <PostCard
                    thumbnail="../thumbnail-2.png"
                    dateContent="INTERNET • May 20, 2021"
                    title="How to design a product that can grow itself 10x in year"
                    description="Lorem ipsum dolor nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet lorem."
                    authorImg="../author-2.png"
                    authorName="Brunette Daisy"
                    authorJob="UI Designer"
                />
            </div>
            <div className="w-4/12 pr-4">
                <PostCard
                    thumbnail="../thumbnail-3.png"
                    dateContent="9TO5 • June 22, 2021"
                    title="The More Importany Skill You Can Learn in 2021"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed auctor, nunc ut aliquam ultricies."
                    authorImg="../author-3.png"
                    authorName="Esther Haward"
                    authorJob="Entrepreneur"
                />
            </div>
            <div className="w-4/12 pr-4">
                <PostCard
                    thumbnail="../thumbnail-4.png"
                    dateContent="INSPIRATION • June 18, 2021"
                    title="Email Marketing: How to write a perfect email subject line"
                    description="Nunc sed semper nunc. Sed auctor, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet lorem."
                    authorImg="../author-4.png"
                    authorName="Robert Fox"
                    authorJob="Front-End Engineer"
                />
            </div>
            <div className="w-4/12 pr-4 mt-14">
                <PostCard
                    thumbnail="../thumbnail-3.png"
                    dateContent="9TO5 • June 22, 2021"
                    title="The More Importany Skill You Can Learn in 2021"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed auctor, nunc ut aliquam ultricies."
                    authorImg="../author-3.png"
                    authorName="Esther Haward"
                    authorJob="Entrepreneur"
                />
            </div>
            <div className="w-4/12 pr-4 mt-14">
                <PostCard
                    thumbnail="../thumbnail-4.png"
                    dateContent="INSPIRATION • June 18, 2021"
                    title="Email Marketing: How to write a perfect email subject line"
                    description="Nunc sed semper nunc. Sed auctor, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet lorem."
                    authorImg="../author-4.png"
                    authorName="Robert Fox"
                    authorJob="Front-End Engineer"
                />
            </div>
            <div className="w-4/12 pr-4 mt-14">
                <PostCard
                    thumbnail="../thumbnail-2.png"
                    dateContent="INTERNET • May 20, 2021"
                    title="How to design a product that can grow itself 10x in year"
                    description="Lorem ipsum dolor nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet lorem."
                    authorImg="../author-2.png"
                    authorName="Brunette Daisy"
                    authorJob="UI Designer"
                />
            </div>
      </div>
    );
}