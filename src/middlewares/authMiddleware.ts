import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Types for User Payload in Token
export interface IUserPayload {
  id: string;
  email: string;
  role: 'admin' | 'buyer';
}

// Custom Request Interface to extend Express Request
export interface CustomRequest extends Request {
  user?: IUserPayload;
}

/**
 * 1. Verify JWT Token Middleware
 * Checks if a valid Bearer token is present in the Authorization header
 */
export const verifyToken = (
  req: CustomRequest, 
  res: Response, 
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ 
      success: false, 
      message: 'Access Denied: No or invalid token format provided!' 
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const verified = jwt.verify(
      token, 
      process.env.JWT_SECRET as string
    ) as IUserPayload;

    req.user = verified;
    next();
  } catch (error) {
    return res.status(403).json({ 
      success: false, 
      message: 'Invalid or Expired Token!' 
    });
  }
};

/**
 * 2. Role Authorization Middleware (Admin / Buyer)
 * Restricts access based on allowed roles
 */
export const authorizeRoles = (...allowedRoles: Array<'admin' | 'buyer'>) => {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Forbidden: Access restricted to [${allowedRoles.join(', ')}] only.`,
      });
    }
    next();
  };
};

/**
 * 3. Shortcut Helper Middlewares for Convenience
 */
export const isAdmin = [verifyToken, authorizeRoles('admin')];
export const isBuyer = [verifyToken, authorizeRoles('buyer')];
export const isAuth = [verifyToken, authorizeRoles('admin', 'buyer')];