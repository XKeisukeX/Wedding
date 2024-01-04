<script>
    import User from "../Images/outline-user-icon-3.png";
    import User2 from "../Images/outline-user-icon-2.png";
    import User3 from "../Images/outline-user-icon-3.png";
</script>

<header>
    <nav class="container flex justify-between items-center p-5">
        <div class="text-black">
            <a href="#home">
               <h2 class="uppercase font-bold text-2xl">zo<span class="text-pink-500">la.</span></h2>
            </a>
        </div>
        <div>
            <ul class="hidden lg:flex items-center space-x-3">
                <li><a href="#" class="text-medium font-medium hover:text-pink-500 ease-in duration-200">Home</a></li>
                <li><a href="#" class="text-medium font-medium hover:text-pink-500 ease-in duration-200">About</a></li>
                <li><a href="#" class="text-medium font-medium hover:text-pink-500 ease-in duration-200">Brands</a></li>
                <li><a href="#" class="text-medium font-medium hover:text-pink-500 ease-in duration-200">Rate</a></li>
                <li><a href="#" class="text-medium font-medium hover:text-pink-500 ease-in duration-200">Wedding</a></li>
                <li><a href="#" class="text-medium font-medium hover:text-pink-500 ease-in duration-200">Services</a></li>
            </ul>
        </div>
        <div class="lg:hidden">
            <i class="fa fa-bars text-2xl"></i>
        </div>
    </nav>
</header>

<main>
    <section id="home">
        <div class="container py-20 md:py-24">
            <div class="flex flex-col md:flex-row items-center gap-10">
                <div class="space-y-6">
                    <h2 class="lg:text-5xl text-4xl font-medium leading-tight text-color-primary">The Easiest Wedding Registry</h2>
                    <p class="font-thin text-medium text-white leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reiciendis libero perspiciatis sint. Distinctio, magnam?</p>
                    <button class="lg:py-3 md:py-3 py-2 px-6 w-full md:w-auto bg-color-primary rounded-lg font-medium capitalize text-white cursor-pointe hover:opacity-80 ease-in duration-200">Register now</button>
                </div>
                <div class="w-3/5 md:w-4/5">
                    <img src="https://clipart-library.com/new_gallery/12-123643_banner-freeuse-download-mother-child-silhouette-clip-bride.png" alt="">
                </div>
            </div>
        </div>
    </section>

    <section id="about">
        <div class="container py-20">
            <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                <div class="flex flex-col text-center">
                    <div>
                        <div class="bg-color-primary inline-block py-3 px-6 rounded-lg hover:bg-pink-500 ease-in duration-200 cursor-pointer">
                            <i class="fa fa-calendar text-3xl text-white"></i>
                        </div>
                        <h4 class="text-xl font-bold py-4">Wedding Reception</h4>
                        <p class="text-gray-500 leading-relaxed font-thin">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, repellat.</p>
                    </div>
                </div>

                <div class="flex flex-col text-center">
                    <div>
                        <div class="bg-color-primary inline-block py-3 px-6 rounded-lg hover:bg-pink-500 ease-in duration-200 cursor-pointer">
                            <i class="fa fa-calendar text-3xl text-white"></i>
                        </div>
                        <h4 class="text-xl font-bold py-4">Wedding Planning</h4>
                        <p class="text-gray-500 leading-relaxed font-thin">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, repellat.</p>
                    </div>
                </div>

                <div class="flex flex-col text-center">
                    <div>
                        <div class="bg-color-primary inline-block py-3 px-6 rounded-lg hover:bg-pink-500 ease-in duration-200 cursor-pointer">
                            <i class="fa fa-calendar text-3xl text-white"></i>
                        </div>
                        <h4 class="text-xl font-bold py-4">Attire and Fashion</h4>
                        <p class="text-gray-500 leading-relaxed font-thin">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, repellat.</p>
                    </div>
                </div>

                <div class="flex flex-col text-center">
                    <div>
                        <div class="bg-color-primary inline-block py-3 px-6 rounded-lg hover:bg-pink-500 ease-in duration-200 cursor-pointer">
                            <i class="fa fa-calendar text-3xl text-white"></i>
                        </div>
                        <h4 class="text-xl font-bold py-4">Ceremony Venues</h4>
                        <p class="text-gray-500 leading-relaxed font-thin">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, repellat.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="brands" class="bg-color-secondary">
        <div class="container py-20 text-white">
            <div class="text-center space-y-3 lg:w-4/5 m-auto">
                <h2 class="text-4xl font-medium capitalize">Brands everyone will love</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur porro nemo modi cupiditate commodi omnis?</p>
            </div>

            <div class="grid lg:grid-cols-4 md:grid-cols-2 items-center gap-5 py-8">
                <div class="h-[40vh] scale-100 overflow-hidden">
                    <img src="https://q9h7k7d8.rocketcdn.me/app/uploads/2022/05/WeddingBrandCo.png" class="hover:scale-125 w-full h-full rounded-lg ease in duration-200 cursor-pointer" alt="">
                </div>

                <div class="h-[40vh] scale-100 overflow-hidden">
                    <img src="https://images.pexels.com/photos/7598024/pexels-photo-7598024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="hover:scale-125 w-full h-full rounded-lg ease in duration-200 cursor-pointer" alt="">
                </div>

                <div class="h-[40vh] scale-100 overflow-hidden">
                    <img src="https://thetycoonmedia.com/wp-content/uploads/2021/12/book2.png" class="hover:scale-125 w-full h-full rounded-lg ease in duration-200 cursor-pointer" alt="">
                </div>

                <div class="h-[40vh] scale-100 overflow-hidden">
                    <img src="https://cdn2.hubspot.net/hubfs/145335/8-brands-that-are-absolutely-killing-it-with-their-marketing-design-featured.jpg" class="hover:scale-125 w-full h-full rounded-lg ease in duration-200 cursor-pointer" alt="">
                </div>
            </div>

            <div class="text-center">
                <button class="capitalize py-2 px-8 font-medium bg-pink-500 rounded-full hover:opacity-80 ease-in duration-200">Join with Us</button>
            </div>

        </div>
    </section>

    <section id="rate">
        <div class="container py-20">
            <div class="text-center space-y-3 lg:w-4/5 m-auto py-10">
                <h2 class="text-4xl font-medium capitalize">rated 5 stars on google</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, inventore!</p>
            </div>

            <div class="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-10">
                <div class="text-center space-y-2">
                    <img src={User} class="h-24 w-24 m-auto hover:border-2 border-solid border-color-primary rounded-full p-1 cursor-pointer ease-in duration-100" alt="User Images">
                    <p class="text-gray-500 leading-relaxed text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. A illum omnis voluptatem consequatur.</p>
                    <div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <p class="font-semibold text-sm">John Mark</p>
                </div>

                <div class="text-center space-y-2">
                    <img src={User2} class="h-24 w-24 m-auto border-2 border-solid border-color-primary rounded-full p-1 cursor-pointer" alt="">
                    <p class="text-gray-500 leading-relaxed text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. A illum omnis voluptatem consequatur.</p>
                    <div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </div>
                    <p class="font-semibold text-sm">John Mark</p>
                </div>

                <div class="text-center space-y-2">
                    <img src={User3} class="h-24 w-24 m-auto hover:border-2 border-solid border-color-primary rounded-full p-1 cursor-pointer ease in duration-100" alt="">
                    <p class="text-gray-500 leading-relaxed text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. A illum omnis voluptatem consequatur.</p>
                    <div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <p class="font-semibold text-sm">John Mark</p>
                </div>
            </div>
        </div>
    </section>

    <section id="wedding" class="bg-color-wedding">
        <div class="container py-20 relative">
            <div class="lg:h-80 lg:w-80 lg:bg-color-primary lg:absolute lg:left-0 lg:top-10 lg:blur-1xl lg:rounded-full lg:opacity-40 lg:overflow-hidden"></div>
            <div class="lg:h-80 lg:w-80 lg:bg-pink-500 lg:absolute lg:bottom-5 lg:blur-1xl lg:rounded-full lg:opacity-40 lg:overflow-hidden"></div>
            <div class="flex flex-col md:flex-row items-center gap-20">
                <div class="rounded-lg bg-pink-500 md:w-1/2 h-[60vh]">
                    <img src="https://st5.depositphotos.com/76654942/65269/v/450/depositphotos_652691578-stock-illustration-wedding-invitations-card-cute-couple.jpg" class="rounded-lg w-full h-full rotate-6 hover:rotate-0 ease-in duration-200" alt="">
                </div>

                <div class="md:w-1/2 space-y-6 text-center lg:text-left w-auto">
                    <h2 class="text-4xl font-medium capitalize leading-tight">Create a <span class="underline text-pink-500 hover:no-underline cursor-pointer">Free</span> wedding website, too</h2>
                    <p class="leading-relaxed font-thin">Lorem ipsum dolor sit amet <span class="font-bold">consectetur</span> adipisicing elit. Molestias atque odio perferendis. Qui tempora amet molestiae ad ipsum eaque, eius recusandae corporis, id ipsam quo!</p>
                    <button class="lg:py-3 md:py-3 py-2 px-6 w-full md:w-auto bg-color-primary rounded-lg font-medium capitalize text-white cursor-pointe hover:opacity-80 ease-in duration-200">Create for free</button>
                </div>
            </div> 
        </div>
    </section>

    <section id="services">
        <div class="container py-20">
            <div class="text-center space-y-3 lg:w-4/5 m-auto mb-10">
                <h2 class="text-4xl font-medium capitalize">Make it easy for your whole crew</h2>
            </div>

            <div class="grid lg:grid-cols-3 md:grid-cols-2 py-6 gap-5 md:gap-10">
                <div class="flex flex-col text-center items-center">
                   <div>
                    <div class="bg-color-primary inline-block py-3 px-6 rounded-lg hover:bg-pink-500 ease-in duration-200 cursor-pointer">
                        <i class="fa fa-calendar text-3xl text-white"></i>
                    </div>
                    <h4 class="text-xl font-bold py-4">Wellness Programs</h4>
                    <p class="text-gray-500 leading-relaxed font-thin text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, obcaecati similique asperiores molestias eveniet hic!</p>
                   </div>
                </div>

                <div class="flex flex-col text-center">
                    <div>
                     <div class="bg-color-primary inline-block py-3 px-6 rounded-lg hover:bg-pink-500 ease-in duration-200 cursor-pointer">
                         <i class="fa fa-calendar text-3xl text-white"></i>
                     </div>
                     <h4 class="text-xl font-bold py-4">Regular Team Meetings</h4>
                     <p class="text-gray-500 leading-relaxed font-thin text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, obcaecati similique asperiores molestias eveniet hic!</p>
                    </div>
                 </div>

                 <div class="flex flex-col text-center">
                    <div>
                     <div class="bg-color-primary inline-block py-3 px-6 rounded-lg hover:bg-pink-500 ease-in duration-200 cursor-pointer">
                         <i class="fa fa-calendar text-3xl text-white"></i>
                     </div>
                     <h4 class="text-xl font-bold py-4">Flexible Workspace</h4>
                     <p class="text-gray-500 leading-relaxed font-thin text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, obcaecati similique asperiores molestias eveniet hic!</p>
                    </div>
                 </div>

                 <div class="flex flex-col text-center items-center">
                    <div>
                     <div class="bg-color-primary inline-block py-3 px-6 rounded-lg hover:bg-pink-500 ease-in duration-200 cursor-pointer">
                         <i class="fa fa-calendar text-3xl text-white"></i>
                     </div>
                     <h4 class="text-xl font-bold py-4">Team-Building Activities</h4>
                     <p class="text-gray-500 leading-relaxed font-thin text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, obcaecati similique asperiores molestias eveniet hic!</p>
                    </div>
                 </div>
 
                 <div class="flex flex-col text-center">
                     <div>
                      <div class="bg-color-primary inline-block py-3 px-6 rounded-lg hover:bg-pink-500 ease-in duration-200 cursor-pointer">
                          <i class="fa fa-calendar text-3xl text-white"></i>
                      </div>
                      <h4 class="text-xl font-bold py-4">Feedback Mechanism</h4>
                      <p class="text-gray-500 leading-relaxed font-thin text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, obcaecati similique asperiores molestias eveniet hic!</p>
                     </div>
                  </div>
 
                  <div class="flex flex-col text-center">
                     <div>
                      <div class="bg-color-primary inline-block py-3 px-6 rounded-lg hover:bg-pink-500 ease-in duration-200 cursor-pointer">
                          <i class="fa fa-calendar text-3xl text-white"></i>
                      </div>
                      <h4 class="text-xl font-bold py-4">Project Management Tools</h4>
                      <p class="text-gray-500 leading-relaxed font-thin text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, obcaecati similique asperiores molestias eveniet hic!</p>
                     </div>
                  </div>

            

            </div>

        </div>
    </section>

    <section id="footer" class="bg-color-secondary">
        <div class="container py-10">
            <div class="text-center space-y-6">
                <h2 class="text-4xl capitalize text-white font-serif italic">Start your registry today</h2>
                <button class="lg:py-3 md:py-3 py-2 px-6 bg-color-primary rounded-lg font-medium capitalize text-white cursor-pointe hover:opacity-80 ease-in duration-200">Register now</button>

                <div class="border-t-2 border-solid border-white pt-7 ">
                    <h6 class="text-sm font-medium text-white">Copyright by @JMD 2024</h6>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
    #home {
        background: url('https://img.freepik.com/free-photo/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product-plain-studio-background_1258-71265.jpg') no-repeat;
        background-size: cover;
        height: 100vh;
        background-position: center;
    }
    .checked {
        color: yellow;
    }
    ul li {
    display: inline-block;
    }
    ul li a {
        padding: 10px;
        position: relative;
    }
    ul li a::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: rgb(223, 107, 126); 
        transition: width 0.3s ease; 
    }
    ul li a:hover::before {
        width: 100%;
    }
</style>