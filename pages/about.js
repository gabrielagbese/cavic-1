import Image from "next/image";

export default function About() {
  return (
    <div className="about">
      <h2 className="about-head">Creative Arts and Visual Imagery Centre</h2>
      <div className="abouttop">
        <p className="aboutintro">
          CAVIC is a creative hub that provides artists with access to
          facilities to enable them pick up new skills, make them more visible
          and help them generate wealth in the creative ecosystem of Africa,
          whether they are visual artists, photographers, performers, designers,
          musicians, curators, consumers of creative works or suppliers of
          creative materials. It is strategically located in the heart of Abuja,
          the federal capital city of Nigeria.
        </p>
        <Image src="/images/slider/slide5.jpg" height={500} width={850} />
      </div>
      <p>
        There are currently few services available to up and coming artists and
        few platforms that allow or provide them with start-up support or enable
        them to link up with other artists in similar situations. In a city such
        as Abuja where rents are exorbitant and many artists arrive with just
        their talents and their tools, finding the space, support and networks
        that enable them to express and grow that talent is oftentimes
        impossible, leading to a stunting of creative expression. CAVIC was
        established to fill a need within our cultural landscape occasioned by
        the existing struggles and isolation of local artists. It addresses the
        disunity and other impediments to growth that exist among the creative
        community.
      </p>
      <p>
        This creative space serves as a resource centre, a meeting place and
        melting pot for creative practitioners and organisations, CAVIC provides
        a supportive and creative space where innovative professionals from
        diverse artistic fields exploit their creative genius to foster social
        change. CAVIC also builds capacity and confidence across the creative
        workforce, ignited by creative education and skills provision. This
        space serves as an open resource for a range of collaborative youth
        meetings and efforts, and as an exhibition centre for photography and
        visual art, among other artistic endeavours. It also undertakes art
        promotion; shows and exhibitions; training at both physical and virtual
        spaces while also providing access to online marketplaces.
      </p>
      <p>
        CAVIC is a great way of keeping artists and designers connected, with
        emphasis on interaction and cross-cultural artistic exchanges between
        national, regional and international artists. Serving as a promoter,
        CAVIC pulls together resources within its network to organize
        exhibitions as well as host public information and art appreciation
        events for the wider community including schools, specialist sectors and
        the members of the general public establishing a coffee-shop environment
        for creativity which attracts members of CAVIC’s various publics.
      </p>
    </div>
  );
}
