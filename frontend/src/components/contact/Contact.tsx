import { TextField } from "@mui/material";
import { useForm } from "@formspree/react";

function Contact() {
  const [formValues, handleSubmit] = useForm("xpwlylob");

  return (
    <div className=" h-screen w-[90vw] flex justify-center items-center max-[600px]:w-screen max-[600px]:h-[90dvh] max-[600px]:items-start max-[600px]:py-10 scrollable">
      <div className="text-xs flex flex-col w-[80%]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-3xl mb-2 max-[600px]:text-center">
              Contact Me
            </div>

            <div className="flex justify-around max-[600px]:flex-col max-[600px]:gap-3">
              <div className="flex text-xl gap-2 select-all max-[600px]:text-base">
                <img
                  className="w-[45px] max-[600px]:w-[25px]"
                  src="phone.svg"
                />
                +91 9312711492
              </div>
              <div className="flex text-xl gap-2 select-all max-[600px]:text-base">
                <img className="w-[45px] max-[600px]:w-[25px]" src="mail.svg" />
                malay4singh@gmail.com
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-3xl pb-2 max-[600px]:text-center">
              Or Leave a Message
            </div>

            <form
              onSubmit={(e) => {
                handleSubmit(e).then(() => {
                  (e.target as HTMLFormElement).reset();
                });
              }}
              className="flex flex-col w-[80%] mx-auto gap-2 max-[600px]:w-full max-[600px]:gap-4"
            >
              <TextField
                label="Name"
                variant="outlined"
                name="name"
                size="small"
              />

              <TextField
                label="Phone Number"
                variant="outlined"
                name="phone"
                size="small"
              />

              <TextField
                label="Email Address"
                variant="outlined"
                name="email"
                size="small"
              />

              <TextField
                label="Message"
                variant="outlined"
                name="message"
                size="small"
                multiline
                minRows={4}
              />

              <button
                className="bg-[#156064] w-[fit-content] py-1 px-2 rounded text-[#fffff0] flex item-center gap-2"
                type="submit"
                disabled={formValues.submitting}
              >
                {formValues.submitting ? (
                  <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                ) : (
                  <img src="send.svg" width="20px" />
                )}
                {formValues.submitting ? "SENDING..." : "SEND"}
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
