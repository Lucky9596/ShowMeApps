/**
 * v0 by Vercel.
 * @see https://v0.dev/t/k32HahwAFFs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Registration Form Fields</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage the fields visible in your registration form.</p>
      </div>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Name</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Full name of the user</p>
          </div>
          <Switch aria-label="Name field visibility" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Email address of the user</p>
          </div>
          <Switch aria-label="Email field visibility" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Password</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Secure password for the user</p>
          </div>
          <Switch aria-label="Password field visibility" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Phone number of the user</p>
          </div>
          <Switch aria-label="Phone field visibility" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Physical address of the user</p>
          </div>
          <Switch aria-label="Address field visibility" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Gender</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Gender of the user</p>
          </div>
          <Switch aria-label="Gender field visibility" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Date of Birth</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Date of birth of the user</p>
          </div>
          <Switch aria-label="Date of Birth field visibility" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">School</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">School of the user</p>
          </div>
          <Switch aria-label="School field visibility" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Sports Interested In</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Sports the user is interested in</p>
          </div>
          <Switch aria-label="Sports Interested In field visibility" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Parent/Guardian Information</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Information about the user's parent or guardian</p>
          </div>
          <Switch aria-label="Parent/Guardian Information field visibility" />
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </main>
  )
}