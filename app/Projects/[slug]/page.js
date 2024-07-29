import NotFound from "@/app/not-found";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Header/navbar";
import { SubMenu } from "../../component/Header/submenu";
import { PORTFOLIO } from "@/app/data/data";
import ProjectDetail from "./ProjectDetail";

export async function generateMetadata({ params }) {
  // read route params
  const slug = params.slug;
  const project = PORTFOLIO.find((item) => item.link === slug);
  if (!project) {
    return { notFound: true }; // return not found
  } else {
    // return metadata
    return {
      title: `${project.title} - Project`,
      description: `This is the page of ${project.description}.`,
      twitter: {
        card: project.title,
        title: project.title,
        description: project.description,
        // siteId: '1467726470533754880',
        creator: "@CDC",
        // creatorId: '1467726470533754880',
        images: [`${process.env.WEBSITE_URI}/${project.image}`], // Must be an absolute URL
      },
      openGraph: {
        images: [
          "/images/Logo_New.svg",
          `${process.env.WEBSITE_URI}/${project.image}`,
        ],
      },
    };
  }
}

export default function Page({ params }) {
  const project = PORTFOLIO.find((item) => item.link === params.slug);
  if (!project) return <NotFound />;
  return (
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      <ProjectDetail data={project} />
      {/* {project ? <NotFound /> : <ProjectDetail data={project} />} */}
      <Footer />
    </>
  );
}
