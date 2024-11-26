import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "../Components/PostAuthor";
import thumbnail from "../images/blog6.jpg"

const PostDetail = function () {
    return (
        <section className="post-detail">
            <div className="container post-detail_container">
                <div className="post-detail_header">
                    <PostAuthor/>
                    <div className="post-detail_buttons">
                        <Link to={`/posts/werwer/edit`} className="edit-post">Modifier</Link>
                        <Link to={`/posts/werwer/delete`} className="delete-post">Supprimer</Link>
                    </div>
                </div>
                <h1>This is the post title</h1>
                <div className="post-detail_thumbnail">
                    <img src={thumbnail} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis error recusandae maiores deleniti nisi illum optio nemo blanditiis. Optio totam distinctio incidunt! Pariatur blanditiis nostrum facere sunt illo cum nemo!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nemo quo cum, dolorum modi vero, ea libero esse amet sit voluptates nisi sunt veniam aut laudantium similique. Quo, ullam impedit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni perspiciatis ipsum fugiat quo voluptatem, vero reprehenderit quaerat saepe quia error corrupti vel provident et explicabo doloremque facilis sint cupiditate.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni perspiciatis ipsum fugiat quo voluptatem, vero reprehenderit quaerat saepe quia error corrupti vel provident et explicabo doloremque facilis sint cupiditate.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis cupiditate quae illo officia quis nihil molestias corporis, a eum aperiam doloremque, ad, voluptates quia neque non. Sunt natus dolore eius.
                Ad minus ex, similique molestias explicabo impedit asperiores ratione dicta deserunt delectus maxime repellendus, nulla voluptatem obcaecati iste ut, blanditiis dignissimos voluptatum quidem praesentium distinctio harum odit deleniti! Culpa, dolor?
                Laborum dolore, nulla voluptatibus unde possimus harum quos qui facilis beatae, commodi quae assumenda corrupti eos? In dolorem fugiat minima libero facilis quos ipsa accusamus repellat minus corrupti! Iusto, id!
                Omnis, quidem adipisci eligendi perspiciatis consectetur consequuntur accusamus. Ex provident libero aspernatur, minima ab dolorem iusto esse placeat perferendis sapiente quisquam totam laudantium, cum, sint est rem aperiam temporibus et?
                Iure ullam voluptatem eaque accusantium numquam quibusdam doloremque dolor tempora quasi consequuntur quae, quos corrupti ipsa, earum et incidunt perspiciatis! Quas incidunt odit, consequatur amet possimus assumenda temporibus quo porro?
                Dolorum, voluptates neque architecto accusamus animi impedit soluta sed nisi officiis eligendi, aliquam non. Id numquam, doloribus obcaecati soluta provident odit, maiores harum officia dolorum debitis quo optio, voluptatem aliquam.
                At, illum itaque molestias quasi possimus quaerat deserunt doloribus, perferendis aperiam, non repellat omnis aliquid ipsum labore et adipisci necessitatibus nihil! Perspiciatis porro quidem fugit voluptates quisquam eos quis aliquid.
                Neque, odit tenetur. Autem at dolor dignissimos id cupiditate ducimus eaque placeat quam repellat ipsam suscipit in expedita, consequatur, obcaecati aliquid distinctio hic. Reprehenderit eaque, hic autem explicabo nulla sint!
                Iste minima excepturi dolores reiciendis, laudantium perferendis enim mollitia distinctio ducimus commodi doloribus maiores officiis, laborum repellendus corrupti, omnis quod veritatis quo ea nobis sequi repudiandae esse. Nulla, beatae amet.
                Accusantium ducimus, harum sed ex facilis quae vitae enim. Dolor culpa libero magni id quas saepe adipisci, corrupti animi illo nobis amet ut nesciunt consequatur provident a, harum at? Aut.
                Omnis, voluptate doloremque doloribus necessitatibus quasi ut culpa quibusdam beatae facilis sequi delectus reprehenderit mollitia enim cumque laboriosam rerum officiis quas dignissimos, aperiam eos in est laudantium tenetur? Consequuntur, dicta!</p>
            </div>
            
        </section>
    )
}

export default PostDetail