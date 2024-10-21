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
import { Textarea } from "@/components/ui/textarea"

Modal.setAppElement('#root')

const formSchema = z.object({
  nome: z.string().min(2, {message: "coloque o nome completo do serviço."}).max(100),
  descricao: z.string().min(2).max(100),
  valor: z.number().positive()
})

export const ModalAddService = () => {
  const { closeModal, modalAddIsOpen } = useContext(ModalContext)

  const addnewServiceForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      descricao: "",
      valor: 0,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Modal
      isOpen={modalAddIsOpen}
      onRequestClose={closeModal}
      contentLabel="Adding new subscribe"
      className="relative m-auto p-8 w-[95%] max-w-[500px] bg-gradient-to-t from-blue-500 to-zinc-950 max-h-[90%] overflow-y-auto rounded-[8px]"
      overlayClassName="modal-overlay"
    >   
    <Form {...addnewServiceForm}>
      <form onSubmit={addnewServiceForm.handleSubmit(onSubmit)} className="space-y-6 mt-10 text-white">
        <FormField
          control={addnewServiceForm.control}
          name="nome"
          render={({ field }) => (
            <FormItem className='text-white'>
              <FormLabel className='text-lg'>Nome do Serviço</FormLabel>
              <FormControl>
                <Input placeholder="Digite o nome do serviço" {...field} className='rounded border-2 placeholder:text-slate-400'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex gap-4 flex-col'>

            <FormField
            control={addnewServiceForm.control}
            name="descricao"
            render={({ field }) => (
                <FormItem className='text-white'>
                <FormLabel className='text-lg'>Descrição</FormLabel>
                <FormControl>
                    <Textarea placeholder="Descreva o serviço..." className='rounded border-2 placeholder:text-slate-400' {...field}/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={addnewServiceForm.control}
            name="nome"
            render={({ field }) => (
                <FormItem className='text-white'>
                <FormLabel className='text-lg'>Valor</FormLabel>
                <FormControl>
                    <Input placeholder="R$ 0,00" type='number' {...field} className='rounded border-2 placeholder:text-slate-400'/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <div className='w-full flex gap-2 justify-end'>
        <Button type="submit" className='text-white bg-zinc-950 rounded-[4px]'>Register</Button>
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
