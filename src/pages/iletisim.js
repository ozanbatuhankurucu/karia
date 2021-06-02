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
      <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Row>
            <h1>İletişim</h1>
            <p className="aciklama">
              Tüm detaylı bilgi ve teklif talepleriniz için iletişime geçmeniz
              yeterli, formu doldurun en kısa sürede tarafınıza dönüş yapalım.
            </p>
          </Row>
          <Row>
            <label className="form-name" for="isim">
              İsminiz
            </label>
            <input
              className="input"
              id="isim"
              placeholder="İsim"
              {...register("isim")}
            />
          </Row>
          <Row>
            <label className="form-name" for="e-mail">
              E-mail adresiniz*
            </label>
            <input
              id="e-mail"
              type="email"
              className="input"
              placeholder="e-mail@adres.com"
              {...register("email", {
                required: true,
                pattern: /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/,
              })}
            />
            {errors.email && (
              <span className="error">
                E-mail alanının formata uygun doldurulması gereklidir.
              </span>
            )}
          </Row>
          <Row>
            <label className="form-name" for="message">
              Mesajınız*
            </label>
            <textarea
              id="message"
              className="input input-message"
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
