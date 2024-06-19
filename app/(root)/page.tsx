import Banner from "@/components/shared/Banner";
import { Collection } from "@/components/shared/Collection";
import Example from "@/components/shared/Example";
import { getAllImages } from "@/lib/actions/image.actions";
import Image from "next/image";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <section className="w-full flex flex-col justify-center items-center border-b mb-6">
        <p className="border-2 border-gray-200 w-auto py-1 px-3 rounded-3xl text-sm mb-5">
          AI in automation
        </p>
        <h1 className="font-bold text-center text-4xl sm:text-6xl md:text-8xl text-dark-600 mb-5">
          PixelWizard AI
        </h1>
      </section>

      <p className="flex-center text-2xl text-center mb-20 sm:mb-44">
        AI-Driven Easy Image To Asset Transformation
      </p>

      <Example />

      <div className="w-full min-h-[50vh] flex flex-col sm:flex-row mb-32 sm:mb-44">
        <div className="w-full h-[30vh] sm:h-[50vh] sm:w-1/2 p-3 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold my-5 text-dark-600">
            Unleash the power of AI to edit, enhance, and transform your photos
            effortlessly.
          </h2>
          <p className="text-dark-600 my-5 text-lg">
            At <span className="font-bold">PixelWizard</span>, we blend
            cutting-edge AI technology with user-friendly tools to deliver
            exceptional photo editing results. Whether you're a professional
            photographer, an online retailer, or just someone who loves great
            photos, our app has something for you.
          </p>
        </div>
        <div className="w-full h-[30vh] sm:h-[50vh] sm:w-1/2 p-3 flex justify-center items-center">
          <Image
            src={"/assets/images/cloudinaryLogo.png"}
            width={360}
            height={77}
            alt="cloudinary logo"
            className="-rotate-45"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
