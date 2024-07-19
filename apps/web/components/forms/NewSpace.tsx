
import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
  Switch,
} from "@repo/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SelectAnimate from "../../../../packages/ui/src/SelectAnimate";
import ImageUpload from "../ImageUpload/ImageUpload";
import { newSpaceformSchema } from "../../lib/zod/schemas/newSpaceSchema";
import z from "../../lib/zod";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const NewSpace = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof newSpaceformSchema>>({
    resolver: zodResolver(newSpaceformSchema),
    defaultValues: {
      spacename: "",
      spacetitle: "",
      spaceDescription: "",
      feedbackType: "",
      starRating: undefined,
      userlogo: "",
    },
  });
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof newSpaceformSchema>) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };
    setIsLoading(true);
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/spaces`,
      requestOptions
    );
    const response = await data.json();
    console.log(response.id);
    setIsLoading(false);
    router.push(`/dashboard/space/${response.id}`);
    
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        autoComplete={"off"}
      >
        <FormField
          control={form.control}
          name="spacename"
          render={({ field }) => (
            <FormItem>
              <Label text="Space Name" required={true} />
              <FormControl>
                <Input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
                  placeholder="Enter your space name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="spacetitle"
          render={({ field }) => (
            <FormItem>
              <Label text="Header Title" required={true} />
              <FormControl>
                <Input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter your space title"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="spaceDescription"
          render={({ field }) => (
            <FormItem>
              <Label text="Header Description" required={true} />
              <FormControl>
                <Input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter your space description"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex lg:items-center gap-6 flex-col lg:flex-row">
          <FormField
            control={form.control}
            name="feedbackType"
            render={({ field }) => (
              <FormItem>
                <Label text="Feedback type" required={true} />
                <FormControl>
                  <SelectAnimate {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="starRating"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Label text="Star rating" />
                <FormControl>
                  <Switch className="mt-2" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="userlogo"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Label text="Upload logo" required={true} />
              <FormControl>
                <ImageUpload {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between">
          <Button text="Cancel" variant="outline" className="px-8"></Button>
          <Button text="Create" className="px-8 flex gap-2 bg-black text-white" variant="secondary" loading={isLoading}></Button>
        </div>
      </form>
    </Form>
  );
};

export default NewSpace;
