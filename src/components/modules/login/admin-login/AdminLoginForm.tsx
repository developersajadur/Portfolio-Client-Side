/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { adminLoginValidationSchema } from './adminLoginSchema.validation';
import { TAdminLogin } from '@/types';
import { useState } from 'react';
import { toast } from 'sonner';
import { loginUser } from '@/services/AuthServices';
import { useRouter, useSearchParams } from 'next/navigation';


const AdminLoginForm = () => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(adminLoginValidationSchema),
  });

  const onSubmit = async(data: TAdminLogin) => {
    setLoading(true);
    try {
      const response = await loginUser(data.email, data.password);
      if (response.success) {
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/dashboard");
        }
        toast.success("Login successful!");
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-96 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email" 
                id="email"
                placeholder="Enter your email"
                {...register('email')}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                {...register('password')}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLoginForm;
