"use client"
import { useContext } from 'react'
import Modal from 'react-modal'
import { ModalContext } from '../../../context/ModalContext'
import { SquareX } from 'lucide-react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'


Modal.setAppElement('#root')

const formSchema = z.object({
  username: z.string().min(2).max(100),
  password: z.string(),
})

export const ModalLogin = () => {
  const { closeModal, modalLogin } = useContext(ModalContext)

  const addnewServiceForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Modal
      isOpen={modalLogin}
      onRequestClose={closeModal}
      contentLabel="Adding new subscribe"
      className="relative m-auto p-8 w-[85%] max-w-[400px] bg-gradient-to-t from-blue-500 to-zinc-950 max-h-[90%] overflow-y-auto rounded-[8px]"
      overlayClassName="modal-overlay"
    >   
    <Form {...addnewServiceForm}>
      <form onSubmit={addnewServiceForm.handleSubmit(onSubmit)} className="space-y-6 mt-10 text-white">
        <FormField
          control={addnewServiceForm.control}
          name="username"
          render={({ field }) => (
            <FormItem className='text-white'>
              <FormLabel className='text-lg'>Username</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu username" {...field} className='rounded border-2 placeholder:text-slate-400'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex gap-4 flex-col'>

            <FormField
            control={addnewServiceForm.control}
            name="password"
            render={({ field }) => (
                <FormItem className='text-white'>
                <FormLabel className='text-lg'>Password</FormLabel>
                <FormControl>
                    <Input placeholder="Digite seu password" {...field} className='rounded border-2 placeholder:text-slate-400'/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <div className='w-full flex gap-2 justify-end'>
        <Button type="submit" className='text-white bg-zinc-950 rounded-[4px]'>Entrar</Button>
        <Button type="button" className='text-white bg-red-800 rounded-[4px]' onClick={closeModal}>Cancel</Button>
        </div>
      </form>
    </Form>
        <button
        type="button"
        onClick={closeModal}
        className="text-zinc-50 absolute right-5 top-5"
        >
            <SquareX size={32} />
        </button>
    </Modal>
  )
}
