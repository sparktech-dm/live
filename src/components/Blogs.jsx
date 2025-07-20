import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ef29561408af5a2d2ea3b1ffd871435735274eba?width=947",
      title:
        "Unlocking the Power of SEO Keyword Research: A Guide to Choosing the Right Tools",
      date: "Feb 7, 2024",
      tags: ["Featured", "News"],
      featured: true,
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/06d79cf225dc8055873557d4fc0a784bdf85cdfe?width=947",
      title:
        "Navigating the Marketplace for SEO: Finding the Right Solutions for Your Business",
      date: "Feb 7, 2024",
      tags: ["Article"],
      featured: false,
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9efc33b89dbb8aaa5a668eb24f188229c89ecf73?width=947",
      title:
        "Empower Your SEO Strategy with Top SEO Tools: A Comprehensive Guide",
      date: "Feb 7, 2024",
      tags: ["News"],
      featured: false,
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7f94cb529a0d18349c36482c74a52a2e99102c59?width=947",
      title:
        "Unveiling the Power of Organic Search: Why It Matters and How to Leverage It",
      date: "Feb 7, 2024",
      tags: ["Tips"],
      featured: true,
    },
    {
      id: 5,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c5ce47ff0ed1b496d9f28ef67d66331391679061?width=947",
      title: "Unlocking the Secret Sauce: A Guide to Ranking on Google",
      date: "Feb 7, 2024",
      tags: ["News"],
      featured: false,
    },
    {
      id: 6,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b469e4edf956f53eee738722d578f7203389ae20?width=947",
      title: "The Ultimate Guide to Boosting Your Website's SEO Performance",
      date: "Mar 1, 2024",
      tags: ["Tips"],
      featured: true,
    },
  ];

  const StarIcon = () => (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3822 5.42212L9.27284 7.24228L9.9155 9.96431C9.95096 10.1121 9.94183 10.267 9.88926 10.4096C9.83669 10.5522 9.74305 10.676 9.62016 10.7654C9.49726 10.8548 9.35064 10.9057 9.1988 10.9118C9.04696 10.9179 8.89672 10.8789 8.76706 10.7996L6.39987 9.34275L4.03128 10.7996C3.90164 10.8784 3.75158 10.9171 3.6 10.9108C3.44842 10.9044 3.3021 10.8534 3.17947 10.7641C3.05683 10.6748 2.96336 10.5512 2.91083 10.4089C2.8583 10.2666 2.84905 10.1119 2.88425 9.96431L3.52925 7.24228L1.41987 5.42212C1.30517 5.32299 1.22221 5.19225 1.18136 5.04625C1.14052 4.90025 1.14359 4.74545 1.19019 4.60119C1.2368 4.45692 1.32487 4.32958 1.44342 4.23507C1.56196 4.14056 1.70572 4.08307 1.85675 4.06978L4.62237 3.84665L5.68925 1.26478C5.747 1.12407 5.84528 1.00371 5.97161 0.919C6.09794 0.834292 6.2466 0.789062 6.3987 0.789062C6.5508 0.789062 6.69946 0.834292 6.82579 0.919C6.95212 1.00371 7.05041 1.12407 7.10815 1.26478L8.17456 3.84665L10.9402 4.06978C11.0915 4.08258 11.2357 4.13975 11.3547 4.23413C11.4736 4.3285 11.5621 4.45589 11.609 4.60034C11.6559 4.74478 11.6591 4.89985 11.6183 5.04611C11.5775 5.19238 11.4943 5.32334 11.3794 5.42259L11.3822 5.42212Z"
        fill="#F58327"
      />
    </svg>
  );

  const CalendarIcon = () => (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.90991 1.53906H8.78491V1.16406C8.78491 1.06461 8.7454 0.969224 8.67508 0.898897C8.60475 0.828571 8.50937 0.789063 8.40991 0.789062C8.31046 0.789063 8.21507 0.828571 8.14475 0.898897C8.07442 0.969224 8.03491 1.06461 8.03491 1.16406V1.53906H4.28491V1.16406C4.28491 1.06461 4.2454 0.969224 4.17508 0.898897C4.10475 0.828571 4.00937 0.789063 3.90991 0.789062C3.81046 0.789063 3.71507 0.828571 3.64475 0.898897C3.57442 0.969224 3.53491 1.06461 3.53491 1.16406V1.53906H2.40991C2.211 1.53906 2.02023 1.61808 1.87958 1.75873C1.73893 1.89938 1.65991 2.09015 1.65991 2.28906V9.78906C1.65991 9.98797 1.73893 10.1787 1.87958 10.3194C2.02023 10.46 2.211 10.5391 2.40991 10.5391H9.90991C10.1088 10.5391 10.2996 10.46 10.4402 10.3194C10.5809 10.1787 10.6599 9.98797 10.6599 9.78906V2.28906C10.6599 2.09015 10.5809 1.89938 10.4402 1.75873C10.2996 1.61808 10.1088 1.53906 9.90991 1.53906Z"
        fill="#F58327"
      />
    </svg>
  );

  const NewsIcon = () => (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2349 1.91406H1.98486C1.78595 1.91406 1.59519 1.99308 1.45453 2.13373C1.31388 2.27438 1.23486 2.46515 1.23486 2.66406V9.41406C1.23486 9.61297 1.31388 9.80374 1.45453 9.94439C1.59519 10.085 1.78595 10.1641 1.98486 10.1641H10.2349C10.4338 10.1641 10.6245 10.085 10.7652 9.94439C10.9058 9.80374 10.9849 9.61297 10.9849 9.41406V2.66406C10.9849 2.46515 10.9058 2.27438 10.7652 2.13373C10.6245 1.99308 10.4338 1.91406 10.2349 1.91406ZM8.35986 7.91406H3.85986C3.76041 7.91406 3.66502 7.87455 3.5947 7.80423C3.52437 7.7339 3.48486 7.63852 3.48486 7.53906C3.48486 7.43961 3.52437 7.34422 3.5947 7.2739C3.66502 7.20357 3.76041 7.16406 3.85986 7.16406H8.35986C8.45932 7.16406 8.5547 7.20357 8.62503 7.2739C8.69535 7.34422 8.73486 7.43961 8.73486 7.53906C8.73486 7.63852 8.69535 7.7339 8.62503 7.80423C8.5547 7.87455 8.45932 7.91406 8.35986 7.91406Z"
        fill="#F58327"
      />
    </svg>
  );

  const getTagIcon = (tag) => {
    switch (tag.toLowerCase()) {
      case "featured":
        return <StarIcon />;
      case "news":
        return <NewsIcon />;
      case "article":
        return <NewsIcon />;
      case "tips":
        return <NewsIcon />;
      default:
        return <CalendarIcon />;
    }
  };

  return (
    <section className="w-full  relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute left-0 top-0 w-full h-[678px]">
        <div className="absolute left-0 top-0 w-[130px] h-[216px]">
          <svg
            width="130"
            height="216"
            viewBox="0 0 130 216"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 216C29.8242 216 54 191.824 54 162V0C24.1758 0 0 24.1758 0 54V216ZM118.8 216C88.9758 216 64.8 191.824 64.8 162V0C94.6242 0 118.8 24.1758 118.8 54V216Z"
              fill="#171717"
            />
          </svg>
        </div>
        <div
          className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0A0A0A]"
          style={{
            background:
              "radial-gradient(25% 43.2% at 50% 18.8%, rgba(10, 10, 10, 0.00) 0%, #0A0A0A 100%)",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 flex justify-center items-center px-4 py-32 lg:py-40">
        <h1 className="text-white text-center font-['Unbounded'] text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight">
          Our Exclusive Blogs
        </h1>
      </div>

      {/* Blog Grid */}
      <div className="relative z-10 px-4 lg:px-10 pb-16 lg:pb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group cursor-pointer"
              >
                <article className="w-full">
                  <div className="relative w-full aspect-[473/398] rounded-[23px] overflow-hidden">
                    {/* Blog Image */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#0A0A0A] to-transparent opacity-60" />

                    {/* Tags */}
                    <div className="absolute bottom-[114px] left-[10px] flex flex-wrap gap-1">
                      {post.featured && (
                        <div className="flex items-center gap-2 px-[10px] py-[4px] rounded-full bg-black/50 backdrop-blur-sm border border-white/15">
                          <StarIcon />
                          <span className="text-white text-[11px] font-black uppercase leading-[22px] tracking-wide">
                            Featured
                          </span>
                        </div>
                      )}

                      <div className="flex items-center gap-2 px-[10px] py-[4px] rounded-full bg-black/50 backdrop-blur-sm border border-white/15">
                        <CalendarIcon />
                        <span className="text-white text-[11px] font-black uppercase leading-[22px] tracking-wide">
                          {post.date}
                        </span>
                      </div>

                      {post.tags
                        .filter((tag) => tag !== "Featured")
                        .map((tag, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 px-[10px] py-[4px] rounded-full bg-black/50 backdrop-blur-sm border border-white/15"
                          >
                            {getTagIcon(tag)}
                            <span className="text-white text-[11px] font-black uppercase leading-[22px] tracking-wide">
                              {tag}
                            </span>
                          </div>
                        ))}
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-[10px] left-[10px] right-[10px]">
                      <div className="bg-white/5 backdrop-blur-[31.5px] rounded-[10px] p-[12px]">
                        <h3 className="text-white font-['Unbounded'] text-base font-light leading-6 tracking-[-0.32px]">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
