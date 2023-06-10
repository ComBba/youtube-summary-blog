// pages/index.js
import { useDispatch, useSelector } from 'react-redux'
import { Disclosure, Tab, Transition } from '@headlessui/react'
import LoginDialog from '../components/LoginDialog'
import { openLoginDialog } from '../features/loginSlice'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const dispatch = useDispatch()
  const isOpen = useSelector((state) => state.login.isOpen)

  const tabNames = ["FAQ", "How to Use"]
  const tabContent = {
    "FAQ": "Here you'll find answers to Frequently Asked Questions",
    "How to Use": "Here is a guide on how to use this application"
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <Transition.Root show={isOpen} as="div">
        <LoginDialog />
      </Transition.Root>

      <div className="text-center px-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="text-2xl md:text-5xl text-white font-bold mb-4">
                Welcome to YouTube Summary Blog!
              </Disclosure.Button>
              <Disclosure.Panel className="text-lg text-white mb-4">
                Get a concise summary of your favorite YouTube videos. No more wasting time. We offer the essence.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
            {tabNames.map((tab) => (
              <Tab key={tab}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm leading-5 rounded-lg',
                    'focus:outline-none',
                    selected
                      ? 'bg-white text-blue-900'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {tabNames.map((tab) => (
              <Tab.Panel key={tab} className="p-3 text-white">
                {tabContent[tab]}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        <button onClick={() => dispatch(openLoginDialog())} className="mt-6 text-white bg-indigo-600 hover:bg-indigo-700 rounded px-4 py-2 transition-colors duration-200">
          Get Started
        </button>
      </div>
    </div>
  )
}
