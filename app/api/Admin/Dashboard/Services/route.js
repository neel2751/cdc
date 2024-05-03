// import ServicesSection from "@/models/servicesModel";
// import { connect } from "@/dbConfig/dbConfig";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   //   console.log('Request:', request); // Debugging purposes, uncomment if needed

//   try {
//     await connect();
//     const check = await request.formData();
//     // console.log("formdata is here form Homeapi section api..", check);
//     const serviceName = check.get("serviceName");
//     const slug = check.get("slug");
//     const description = check.get("desc");
//     const images = check.get("allImages"); // this is an array data
//     const MainImageUrl = check.get("MainImageUrl");
//     const MainPublic_id = check.get("MainPublic_id");
//     const MainUrl = check.get("MainUrl");
//     const MainAsset_id = check.get("MainAsset_id");
//     // this all data to save in mongodb
//     let services = new ServicesSection({
//       serviceName: serviceName,
//       slug: slug,
//       description: description,
//       images: JSON.parse(images),
//       mianImage: {
//         url: MainUrl,
//         mainImageUrl: MainImageUrl,
//         public_id: MainPublic_id,
//         asset_id: MainAsset_id,
//       },
//     });
//     const servicePage = await services.save();
//     if (!servicePage)
//       return NextResponse.json({
//         status: 401,
//         error: "Failed to upload Services content ",
//       });
//     return NextResponse.json({
//       status: 200,
//       message: "New Services Add successfully..",
//       success: true,
//       data: servicePage,
//     });
//   } catch (error) {
//     return NextResponse.json({
//       status: 500,
//       error: error.message,
//     });
//   }
// }

import { connect } from "@/dbConfig/dbConfig";
import ServiceSection from "@/models/serviceModel";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: "30mb", // Set your desired value here
//     },
//   },
// };

export async function POST(request) {
  try {
    await connect();
    let formData = await request.formData();
    console.log("this is formData", formData);
    const serviceName = formData.get("serviceName");
    const slug = formData.get("slug");
    const description = formData.get("desc");
    const editor = formData.get("editor");
    const MainAsset_id = formData.get("MainAsset_id");
    const MainPublic_id = formData.get("MainPublic_id");
    const MainUrl = formData.get("MainUrl");
    const MainImageUrl = formData.get("MainImageUrl");
    const IconMainAsset_id = formData.get("IconAssetId");
    const IconMainPublic_id = formData.get("IconPublicId");
    const IconMainUrl = formData.get("IconUrl");
    const IconMainImageUrl = formData.get("IconMainUrl");

    // this all data to save in mongodb
    const Addservices = new ServiceSection({
      serviceName,
      slug,
      mianImage: {
        asset_id: MainAsset_id,
        public_id: MainPublic_id,
        url: MainUrl,
        mainImageUrl: MainImageUrl,
      },
      description,
      editor,
      icon: {
        asset_id: IconMainAsset_id,
        public_id: IconMainPublic_id,
        url: IconMainUrl,
        mainImageUrl: IconMainImageUrl,
      },
    });
    try {
      const servicePage = await Addservices.save();
      return NextResponse.json({
        status: 200,
        message: "New Services Add successfully..",
        success: true,
        data: servicePage,
      });
    } catch (error) {
      console.error(
        "Error adding service page to the database:",
        error.message
      );
      return NextResponse.json({
        status: 500,
        error: "Internal Server Error.",
      });
      // Handle the error appropriately
    }
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: error.message,
    });
  }
}

export async function GET() {
  try {
    await connect();
    let data = await ServiceSection.find();
    if (data) {
      return NextResponse.json({
        status: 200,
        data: data,
        success: true,
      });
    } else {
      return NextResponse.json({
        status: 400,
        data: "data is not found",
        success: false,
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: error.message,
    });
  }
}

export async function PATCH(request) {
  // const path = request.nextUrl.searchParams.get("path");
  // get the path means url
  const path = new URL(request.url);
  // get the path from this url..

  // console.log("this is the main path", path.pathname);
  // const { id } = request.query;
  const url = await request.json();
  const { id } = url;

  // console.log("service id is here", id);

  try {
    await connect();
    let service_section = await ServiceSection.findOne({
      _id: id,
    });
    if (!service_section) {
      return new Response("Service Section Not Found", { status: 404 });
    } else {
      // console.log(JSON.parse(request.body));
      const updatedStatus = !service_section.isActive;
      service_section = await ServiceSection.updateOne(
        { _id: id },
        { $set: { isActive: updatedStatus } }
      );
      revalidatePath(path.pathname);
      return NextResponse.json({
        // revalidated: true,
        status: 200,
        success: true,
      });
      // revalidate path how to use to upadate the page
    }
  } catch (err) {
    return NextResponse.json({
      status: "Error",
      err: err.toString(),
    });
  }
}
