import {
  Button,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  Textarea,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@repo/ui";
import Image from "next/image";
import ImageUpload from "@/components/ImageUpload/ImageUpload";
import StarRating from "@/components/starRating/StarRating";
import { useForm } from "react-hook-form";
import z from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { feedbackTextSchema } from "@/lib/zod/schemas/feedbackTextSchems";

interface FeedbackTextFormPropTypes {
  onCloseDialog: () => void;
}

const FeedbackTextForm = ({ onCloseDialog }: FeedbackTextFormPropTypes) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof feedbackTextSchema>>({
    resolver: zodResolver(feedbackTextSchema),
  });
  const { reset } = form;
  const { isSubmitSuccessful }  = form.formState;
  const params = useParams<{ spacename: string }>();

  useEffect(() => {
    if(isSubmitSuccessful){
      reset({
        name: "",
        email: "",
        feedback: "",
        rating: 0
      });
    }
  }, [isSubmitSuccessful]);

  async function onSubmit(values: z.infer<typeof feedbackTextSchema>) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: values,
        spaceId: params.spacename,
      }),
    };
    setIsLoading(true);
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/feedbacks/text/create`,
      requestOptions
    );
    await data.json();
    setIsLoading(false);
    onCloseDialog();
  }

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Write your feedback</DialogTitle>
      </DialogHeader>
      <div className="w-16 h-16 my-2 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-4xl font-bold">
        <Image
          src={""}
          alt="User Avatar"
          width={128}
          height={128}
          className="rounded-full object-cover w-[100%] h-[100%]"
        />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5"
          autoComplete={"off"}
        >
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <StarRating readonly={false} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Type your feedback here." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <Label text="Enter your name" required={true} />
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    className="pl-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label text="Enter your email" required={true} />
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="pl-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userlogo"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ImageUpload {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between">
            <Button
              text="Cancel"
              variant="outline"
              className="px-8"
              onClick={onCloseDialog}
            ></Button>
            <Button
              text="Send"
              type="submit"
              loading={isLoading}
              className="px-8 flex gap-2 bg-black text-white"
              variant="secondary"
            ></Button>
          </div>
        </form>
      </Form>
    </DialogContent>
  );
};

export default FeedbackTextForm;
