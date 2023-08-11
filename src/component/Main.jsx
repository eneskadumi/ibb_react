import React, { Component } from 'react'


import cardPicture from "../assist/img/sssss.jpg";

import { Link } from "react-router-dom";
import OtherLanguageReusability from '../internationalization/OtherLanguageReusability';

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>



                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

                    <strong className='text-primary'>Merhaba!</strong>

                    {/* inline css */}
                    <span style={{ color: "purple" }} >You should check in on some of those fields below. </span>
                </div>
                <Link to="/blog/list" className="btn btn-primary"><img src={cardPicture} /></Link>
                <br />


                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat numquam, iste quis exercitationem quisquam placeat aliquid ab ipsa inventore officiis vitae eius molestias perspiciatis impedit corporis repellendus mollitia reiciendis facere.
                    Quidem non explicabo sint nostrum ducimus architecto, repellat quam, quos ab eos, nesciunt libero facere fugit id laboriosam nisi facilis veritatis tempore quaerat delectus repellendus? Incidunt inventore quaerat laborum culpa.
                    Hic, molestiae non accusantium expedita est quisquam suscipit fugit debitis, obcaecati quae nobis minus laudantium vitae perferendis doloremque neque minima tempora sed ad beatae voluptate quidem eaque. Provident, error quam.
                    Unde nisi, assumenda distinctio consequuntur nihil eveniet optio quaerat culpa eos nesciunt neque dolorum, accusamus officia accusantium magni ipsa labore aut quam libero provident, perferendis qui sint necessitatibus corrupti! Nulla.
                    Quidem nisi minima porro vel cum quia error nihil! Fuga atque molestiae impedit aliquid aperiam expedita quibusdam mollitia quidem. Illo sapiente asperiores at nobis accusamus earum facere veritatis quis corporis.
                    Eum placeat nemo dolore nisi accusamus doloremque blanditiis, ex possimus, accusantium ipsum vero odio pariatur commodi obcaecati nobis corrupti tenetur laboriosam! Molestias nostrum voluptas ad suscipit dolorum ullam id veritatis?
                    Libero asperiores tempora a vero, consequuntur ea, in quae aspernatur impedit nihil tempore dicta sapiente at soluta harum? Similique accusamus voluptate unde molestias odit ipsa atque quisquam beatae ipsum eos.
                    Eveniet dignissimos molestias voluptas in dolor quod. Odit, dolores. Error, veritatis nobis. Quo, eaque. Consequuntur labore dicta impedit, laboriosam saepe assumenda aliquid. Ab voluptas velit ea veniam quia pariatur nam.
                    Explicabo quae rerum autem. Exercitationem aut eos voluptas, dolore modi illo quis repudiandae dolorem doloribus quia quod perferendis laboriosam expedita, alias, magni architecto! Doloremque dolorum dolore facere odio! Voluptatibus, placeat.
                    Nostrum voluptates repellendus alias ut laudantium inventore maxime, sunt, optio vel sint ab eos illum commodi ad tenetur accusantium voluptatem aliquid dolorem, explicabo molestias quam. Suscipit necessitatibus labore quam enim!</p>




            </React.Fragment>
        )
    }
}
