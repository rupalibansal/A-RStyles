import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 1200, height: 750 }} cols={4} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://lp2.hm.com/hmgoepprod?set=source[/55/44/5544f3babd7bfbcf1faaeeabea05c08080dbbc9a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
    title: "clothes",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=source[/7d/79/7d79fa28ebf8e5de573da360ba365b414d92e499.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
    title: "clothes",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=source[/3e/98/3e98affb071fe233c48078a2ee924680b923f135.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style] ",
    title: "clothes",
  },
  {
    img: " https://lp2.hm.com/hmgoepprod?set=source[/c9/e6/c9e6280534b08f22cd8a9ad4bf3ac2f069bd74f2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
    title: "clothes",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=source[/15/e8/15e84ebce6c61fda71972a4f42b22ea7d2fdb5c2.jpg],origin[dam],category[kids_babyboy_sets],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
    title: "clothes",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=source[/3b/4e/3b4ef86831849f78b27dd200a9d149c240994545.jpg],origin[dam],category[kids_boys_clothing_tshirtsshirts_tshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
    title: "clothes",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=source[/17/06/17067b213479819b24f6ebdac5fcc36098745551.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
    title: "clothes",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=source[/29/30/2930d00b0f58e8eb8d90bab290b31774ea9202ee.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
    title: "clothes",
  },
];
