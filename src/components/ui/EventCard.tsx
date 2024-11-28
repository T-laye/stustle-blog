/* eslint-disable @next/next/no-img-element */
"use client";
import { capitalizeWords, formatDate } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import React from "react";
import { Event } from "../../../types/sanityTypes";
import { urlFor } from "@/sanity/lib/image";
// import { writeClient } from "@/sanity/lib/write-client";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  // const [totalViews, setTotalViews] = useState(event.views || 0); // Initial views from the post prop
  const router = useRouter();

  const gotoEvent = () => {
    // handleCardClick();
    router.push(`/events/${event?.slug.current}`);
  };

  return (
    <div
      onClick={gotoEvent}
      className="cursor-pointer min-w-[230px] md:max-w-[300px] lg:max-w-[400px] w-full h-[390px] lg:h-[380px] flex flex-col rounded-xl bg-white-background hover:shadow-lg duration-150 shadow active:bg-primary-activeCard active:shadow relative"
    >
      <div className="h-1/2 min-h-[200px] bg-primary-activeCard rounded-xl overflow-hidden">
        <img
          height={400}
          width={400}
          src={urlFor(event?.image).url()} // Fallback image
          alt="event image"
          className="object-cover object-center h-full w-full hover:scale-105 duration-150"
        />
      </div>
      <div className="px-4 py-3 flex flex-col gap-1 justify-between h-full ">
        <div>
          <h3 className="text-xl font-medium line-clamp-1 text-start">
            {capitalizeWords(event?.theme)}
          </h3>
          <div className="line-clamp-4 text-sm text-gray-300">
            {/* <p>{event.description} </p> */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sapiente, nobis culpa maxime iste quis praesentium voluptatibus
              nihil doloribus porro accusamus dicta perferendis explicabo, quae
              numquam eius assumenda! Dicta, molestias quis iusto natus esse a
              pariatur, vitae repellendus corporis quae doloribus tempora
              debitis facere? A vel hic dignissimos sapiente, illo minus dolorem
              saepe alias aliquam iure distinctio officiis adipisci quos
              consectetur odio nobis quae non tempore repellendus dicta eos,
              vero officia neque est? Quia beatae neque facilis iste, harum
              dolor eveniet sapiente dicta, adipisci asperiores totam
              repellendus tempore quam consequuntur provident ipsam soluta! Quo
              at nesciunt minima cum repudiandae non repellendus facere in
              laborum. Culpa, quaerat officia! Laboriosam soluta aperiam
              reprehenderit delectus officiis et illum, iure illo suscipit
              nesciunt quam modi omnis tempore voluptates nihil! A, possimus
              officia sint quod ullam delectus! Voluptates pariatur nam quo
              ipsam consequuntur perferendis fugiat, modi aliquam, quam eius
              recusandae explicabo, ullam dolor dolorem. Repellat, dicta illo?
              Aperiam, alias accusamus deserunt fugiat omnis itaque, sed impedit
              quia est accusantium tempora dicta at blanditiis nemo repellendus
              dolorum illo architecto totam libero sequi quasi optio dolorem
              temporibus provident. Pariatur nostrum, id doloribus unde
              distinctio quasi aliquam, voluptatem mollitia quaerat eum iusto
              sed reiciendis exercitationem. Dolorem quo animi nobis porro
              molestiae commodi provident temporibus est? Illum eaque nostrum
              voluptate, impedit modi est a! Corrupti facere cum necessitatibus
              fugit. Voluptatem, harum. Qui quasi labore aspernatur doloribus
              quaerat reprehenderit animi autem! Voluptatibus aliquid molestias
              culpa reiciendis maiores explicabo tenetur cumque suscipit
              incidunt quibusdam corrupti totam, facilis voluptate, itaque
              dolore ipsam nostrum illum aspernatur repellendus. Quae quaerat,
              animi, dolorum esse officiis suscipit unde consequuntur maiores
              voluptatibus eius atque placeat et pariatur enim voluptatum
              obcaecati at dolores magnam similique, labore expedita! Beatae
              atque eveniet similique repellat ea ut cum nemo quam pariatur
              adipisci. Consequuntur eius labore blanditiis a doloremque est
              delectus sunt tempore odio quo consequatur nulla impedit, rerum
              cupiditate repudiandae quasi iste iure saepe similique perferendis
              sapiente, aliquam amet quidem eveniet. Officia dicta amet odit
              nostrum in quis. Veritatis cumque in consequuntur atque iste rem
              quod numquam, provident, porro ad asperiores laboriosam delectus
              officiis veniam dignissimos quibusdam iure, minima quaerat aliquid
              ratione nulla. Facilis saepe laudantium consequatur nemo nihil id
              voluptates esse exercitationem enim, ab libero maiores. Assumenda
              quidem voluptatem dicta dolor similique. Id minus modi rem. At,
              saepe, ut autem omnis non facilis, veritatis consequuntur est id
              quis quaerat. Reiciendis, quisquam. Cum cumque officiis laudantium
              recusandae, quidem magni quaerat enim architecto, delectus aliquid
              dolore voluptas sunt non ad in excepturi dolores qui quo!
              Excepturi repellendus commodi eligendi iusto aut, laborum harum
              iure dignissimos saepe soluta suscipit dolores corporis, a cum
              officiis asperiores non! Illo, optio officia iste, labore nemo
              rerum ducimus excepturi incidunt, sequi nihil natus consequatur
              voluptate. Doloribus quasi beatae consequuntur deserunt error ad
              saepe distinctio earum ab quisquam suscipit soluta quas nesciunt,
              laboriosam tempora quam corporis eveniet eum. Officiis molestias
              asperiores quae nesciunt optio, dicta cupiditate, quisquam quasi
              voluptate temporibus eveniet sit expedita tempore vel eius ipsum
              adipisci hic sapiente voluptatem aspernatur odit laudantium velit
              eum quos. Provident soluta corrupti doloremque, adipisci at magni
              necessitatibus iste beatae temporibus totam harum maiores placeat
              numquam optio ea debitis, quo non dignissimos veniam et? Ab vitae,
              veritatis esse est culpa aliquam beatae eveniet voluptas cum
              molestiae dicta mollitia quibusdam ut labore ipsam dolorem id,
              tenetur quo necessitatibus, nesciunt eos quasi in expedita harum.
              Quibusdam dolor voluptatibus eum. Consequuntur asperiores, magnam
              sapiente, cumque explicabo eum deserunt impedit quis doloribus,
              modi voluptas rerum. Perspiciatis eos repellat ullam corrupti at
              numquam et non culpa corporis provident accusamus laboriosam eaque
              reprehenderit sapiente rem quasi doloremque eveniet minima aliquid
              nihil assumenda, velit nisi officiis repudiandae! Inventore quia
              velit enim, distinctio dicta ipsum molestiae deserunt atque
              excepturi totam accusantium assumenda dolore, dolorem consequatur
              nihil earum quidem incidunt, saepe cupiditate natus. Esse maxime
              possimus dolorem aperiam nesciunt dolor molestiae! Vitae nihil,
              asperiores quas modi minima ducimus alias magni qui, eligendi
              nostrum quis autem, similique perferendis! Officiis voluptates quo
              quisquam, adipisci ipsa rerum quia sed sunt dolores, officia
              ipsam, dolorem error eos accusamus neque. In, eos aliquid? Et
              quod, vel totam tempore ut velit ipsum quis quasi perferendis
              distinctio sit porro, natus explicabo repudiandae! Aliquid
              architecto officiis nobis alias, nam incidunt doloribus cumque
              illo eaque autem maiores delectus harum? Aperiam iste omnis error?
              Eos ea ad voluptates incidunt pariatur. Laudantium, perspiciatis.
              Quos laudantium sapiente doloribus consectetur voluptatum, in,
              reiciendis quo inventore ipsum rem rerum autem assumenda voluptate
              facere unde corporis illo adipisci provident atque delectus. Odit
              itaque, ab odio eum quibusdam voluptatum ducimus tempora
              exercitationem sed dolores debitis qui ad ipsa similique maxime!
              Provident nostrum numquam ratione quaerat incidunt fugiat dolorem
              necessitatibus adipisci libero magni, ad, perferendis architecto
              odio. Dicta magnam consequuntur, neque quae soluta alias doloribus
              tempore at reiciendis, ab dolorum assumenda consectetur voluptas
              nostrum quia. Eveniet, optio dolorem quis magnam sunt quae
              quibusdam explicabo velit recusandae dolorum fugit inventore
              consequatur ipsa sit incidunt nesciunt laboriosam non consectetur?
              Adipisci tenetur natus beatae inventore consequatur quo, quae
              temporibus vero molestias nobis suscipit neque doloribus. Magni,
              sit consequatur. Animi, quam! Nihil numquam quis doloremque sequi
              minima quas sunt optio ex blanditiis expedita possimus tempora
              nemo, similique explicabo pariatur rerum, ea ratione corporis!
              Placeat expedita minus fugiat ex voluptates repellendus eius,
              ratione a, veniam quaerat iusto! Harum architecto nihil molestiae
              vel accusantium porro cupiditate excepturi provident fugit eveniet
              non vero doloribus sint eum facilis ipsa, laboriosam quibusdam
              fuga recusandae incidunt aliquid ipsam voluptas dignissimos!
              Molestias voluptas culpa provident quod praesentium animi! Amet
              reprehenderit accusantium magnam reiciendis quasi sunt fuga
              nostrum nisi iure voluptate, nam similique laborum dolore pariatur
              ea sit in harum quam provident placeat aperiam beatae! Esse quia
              totam nostrum asperiores dolorem ipsa minima saepe temporibus,
              eveniet porro corporis aliquam, exercitationem optio
              necessitatibus. Expedita aliquam excepturi repellendus voluptatem,
              veniam, quam possimus dolorum ut explicabo dolores rem assumenda,
              facere quidem quas quos. Deleniti voluptatibus perspiciatis
              excepturi libero quod. Quam ullam neque quaerat placeat pariatur
              ut doloribus quod! Quisquam magni unde animi, exercitationem
              consequuntur ea eaque repellat voluptatem, labore ratione ullam.
              Animi tempore perspiciatis provident facilis a laboriosam ad
              aliquam ipsum aperiam nemo!
            </p>
          </div>
          <p className="text-xs mt-1 text-gray-300">
            {formatDate(event.date)}
            <br />
            {event.time} WAT
          </p>
        </div>
        <div>
          <p className="text-sm font-medium  text-end text-primary">{`${event.registrations.length} Registered`}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
