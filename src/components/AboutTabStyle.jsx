// TODO: Add content to the TabsContent components

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

import profileImages from "../data/profileImages";

export default function AboutTabs() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 p-4">
      <Tabs defaultValue="pm">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pm" className="tab">
            Project Manager
          </TabsTrigger>
          <TabsTrigger value="ux" className="tab">
            UX Designer
          </TabsTrigger>
          <TabsTrigger value="frontend" className="tab">
            Frontend Developer
          </TabsTrigger>
          <TabsTrigger value="personal" className="tab">
            Personal Corner
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pm" image={profileImages.about.pm}>
          {/* Image on the left, set by TabsContent*/}
          {/* Text content */}
          <h2 className="heading-md mt-0">
            Hi, I'm Orel – a project manager with a strong technical backbone
            and a passion for impact.
          </h2>
          <p className="body-base mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            pretium quam. Sed dictum, eros et facilisis condimentum, mauris
            sapien dapibus est, non rhoncus orci augue non mauris. Nulla eu
            magna quam. Fusce id fringilla turpis, id congue lectus. Nulla sed
            dui condimentum, vestibulum felis id, gravida nisi. Pellentesque id.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            pretium quam. Sed dictum, eros et facilisis condimentum, mauris
            sapien dapibus est, non rhoncus orci augue non mauris. Nulla eu
            magna quam. Fusce id fringilla turpis, id congue lectus. Nulla sed
            dui condimentum, vestibulum felis id, gravida nisi. Pellentesque id.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            pretium quam. Sed dictum, eros et facilisis condimentum, mauris
            sapien dapibus est, non rhoncus orci augue non mauris. Nulla eu
            magna quam. Fusce id fringilla turpis, id congue lectus. Nulla sed
            dui condimentum, vestibulum felis id, gravida nisi. Pellentesque id.
          </p>
          <ul className="list-disc list-inside mt-4 body-base">
            <li>
              Led cross-functional teams in the deployment of AI-powered smart
              carts
            </li>
            <li>Managed remote QA staff across multiple time zones</li>
            <li>Defined product requirements and improved testing pipelines</li>
          </ul>
        </TabsContent>

        <TabsContent value="ux" image={profileImages.about.ux}>
          {/* Image on the left, set by TabsContent*/}
          {/* Text content */}
          <h2 className="heading-md mt-0">
            Hi, I’m Orel – a UX designer who turns user insights into intuitive,
            scalable experiences.
          </h2>
          <p className="body-base mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            pretium quam. Sed dictum, eros et facilisis condimentum, mauris
            sapien dapibus est, non rhoncus orci augue non mauris. Nulla eu
            magna quam. Fusce id fringilla turpis, id congue lectus. Nulla sed
            dui condimentum, vestibulum felis id, gravida nisi. Pellentesque id.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            pretium quam. Sed dictum, eros et facilisis condimentum, mauris
            sapien dapibus est, non rhoncus orci augue non mauris. Nulla eu
            magna quam. Fusce id fringilla turpis, id congue lectus. Nulla sed
            dui condimentum, vestibulum felis id, gravida nisi. Pellentesque id.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            pretium quam. Sed dictum, eros et facilisis condimentum, mauris
            sapien dapibus est, non rhoncus orci augue non mauris. Nulla eu
            magna quam. Fusce id fringilla turpis, id congue lectus. Nulla sed
            dui condimentum, vestibulum felis id, gravida nisi. Pellentesque id.
          </p>
          <ul className="list-disc list-inside mt-4 body-base">
            <li>
              Conducted user research and advised on flows for DAIVI smart cart
              system
            </li>
            <li>
              Studied UX at Technion; final project focused on renovation UX
            </li>
            <li>Skilled in wireframes, user flows, and usability testing</li>
          </ul>
        </TabsContent>

        <TabsContent value="frontend" image={profileImages.about.dev}>
          {/* Image on the left, set by TabsContent*/}
          {/* Text content */}
          <h2 className="heading-md mt-0">
            Hi, I’m Orel – a frontend developer who bridges the gap between
            design and implementation.
          </h2>
          <p className="body-base mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            pretium quam. Sed dictum, eros et facilisis condimentum, mauris
            sapien dapibus est, non rhoncus orci augue non mauris. Nulla eu
            magna quam. Fusce id fringilla turpis, id congue lectus. Nulla sed
            dui condimentum, vestibulum felis id, gravida nisi. Pellentesque id.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            pretium quam. Sed dictum, eros et facilisis condimentum, mauris
            sapien dapibus est, non rhoncus orci augue non mauris. Nulla eu
            magna quam. Fusce id fringilla turpis, id congue lectus. Nulla sed
            dui condimentum, vestibulum felis id, gravida nisi. Pellentesque id.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            pretium quam. Sed dictum, eros et facilisis condimentum, mauris
            sapien dapibus est, non rhoncus orci augue non mauris. Nulla eu
            magna quam. Fusce id fringilla turpis, id congue lectus. Nulla sed
            dui condimentum, vestibulum felis id, gravida nisi. Pellentesque id.
          </p>
          <ul className="list-disc list-inside mt-4 body-base">
            <li>Experience with Python, C++, Java – and Git-based workflows</li>
            <li>
              Contributed to AI system usability and performance monitoring
            </li>
            <li>
              Comfortable translating design specs from Figma into production
              code
            </li>
          </ul>
        </TabsContent>

        <TabsContent value="personal" image={profileImages.about.personal}>
          {/* Image on the left, set by TabsContent*/}
          {/* Text content */}
          <h2 className="heading-md mt-0">Personal Corner</h2>
          <p className="body-base mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            pretium quam. Sed dictum, eros et facilisis condimentum, mauris
            sapien dapibus est, non rhoncus orci augue non mauris. Nulla eu
            magna quam. Fusce id fringilla turpis, id congue lectus. Nulla sed
            dui condimentum, vestibulum felis id, gravida nisi. Pellentesque id.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            pretium quam. Sed dictum, eros et facilisis condimentum, mauris
            sapien dapibus est, non rhoncus orci augue non mauris. Nulla eu
            magna quam. Fusce id fringilla turpis, id congue lectus. Nulla sed
            dui condimentum, vestibulum felis id, gravida nisi. Pellentesque id.
          </p>
          {/* Image carousel */}
          <div className="mt-6">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="max-w-xl mx-auto"
            >
              {[1, 2, 3, 4].map((num) => (
                <SwiperSlide key={num}>
                  <img
                    src={profileImages.carousel[`image${num}`]}
                    alt={`Slide ${num}`}
                    className="rounded-xl object-cover w-full h-[300px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
