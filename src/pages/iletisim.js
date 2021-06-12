import React from "react"
import Layout from "../layouts/Layout"
import { Container, Row, Col } from "reactstrap"
import { useForm } from "react-hook-form"
import "../assets/styles/iletisim.css"

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = data => console.log(data)
  return (
    <Layout className="form-container">
      {/* <div>
        <form action="https://formspree.io/f/mpzkrper" method="POST">
          <label>
            Your email:
            <input type="email" name="_replyto" />
          </label>
          <label>
            Your message:
            <textarea name="message"></textarea>
          </label>

          <button type="submit">Send</button>
        </form>
      </div> */}

      <form
        className="form-wrapper"
        action="https://formspree.io/f/mpzkrper"
        method="POST"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <Container>
          <Row>
            <h1>İletişim</h1>
            <p className="aciklama">
              Tüm detaylı bilgi ve teklif talepleriniz için iletişime geçmeniz
              yeterli, formu doldurun en kısa sürede tarafınıza dönüş yapalım.
            </p>
          </Row>
          <Row>
            <label className="form-name" htmlFor="name">
              İsminiz
            </label>
            <input
              className="input"
              id="name"
              name="name"
              placeholder="İsim"
              {...register("name")}
            />
          </Row>
          <Row>
            <label className="form-name" htmlFor="email">
              E-mail adresiniz*
            </label>
            <input
              id="email"
              type="email"
              name="_replyto"
              className="input"
              placeholder="e-mail@adres.com"
              {...register("_replyto", {
                required: true,
                pattern: /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/,
              })}
            />
            {errors._replyto && (
              <span className="error">
                E-mail alanının formata uygun doldurulması gereklidir.
              </span>
            )}
          </Row>
          <Row>
            <label className="form-name" htmlFor="message">
              Mesajınız*
            </label>
            <textarea
              id="message"
              className="input input-message"
              name="message"
              {...register("message", { required: true })}
            />

            {errors.message && (
              <span className="error">Bu alanın doldurulması gereklidir.</span>
            )}
          </Row>
          <Row>
            <button type="submit">Gönder</button>
          </Row>
        </Container>
      </form>
    </Layout>
  )
}
