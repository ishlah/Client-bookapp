import { SingleHeader } from "@/components/header/singleHeader";

export default function AboutUs() {
  return (
    <div>
      <SingleHeader />
      <div>
        <div className="text-center font-bold text-xl">ABOUT US</div>
        <main className="grid grid-cols-3 space-y-3 gap-4 mx-4">
          <img
            className="w-full h-auto rounded-md"
            src="https://i.pinimg.com/564x/0e/8f/ac/0e8faca0e76d94588008d26f76988a4c.jpg"
            alt=""
          />
          <div className="col-span-2">
            <h1>
              "Welcome to PinjamBuku, your go-to platform for borrowing and
              lending books within the community. Our mission is to foster a
              love for reading by making books accessible to everyone."
            </h1>
            <h1 className="mt-10 mb-2">How It Works:</h1>
            <h3>
              <h3>Step 1: Sign Up Create an account to join our community.</h3>
              <h3>
                Step 2: Browse Books Explore our extensive collection of books
                available for borrowing.
              </h3>
              <h3>
                Step 3: Borrow a Book Select a book you want to read and request
                to borrow it.
              </h3>
              <h3>
                Step 4: Contribute Share your own books with the community by
                adding them to our library.
              </h3>
            </h3>
          </div>
          <div className="col-span-2">
            <h1 className="text-xl mb-2">Our Missions :</h1>
            <div>
              "Our mission is to create a community-driven platform that
              connects book lovers, enabling them to share their favorite books
              and discover new ones. We believe in the power of knowledge and
              the joy of reading."
            </div>
          </div>
          <div></div>
          <div></div>
          <div className="col-span-2">
            <h2 className="mb-2">Why Contribute?</h2>
            <h1 className="mb-4">
              "By contributing your books, you are helping to build a community
              of readers who can access a diverse range of books. Your
              participation enriches the reading experience for everyone."
            </h1>
          </div>
        </main>
      </div>
    </div>
  );
}
