﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test13
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Комната.
    /// </summary>
    // *** Start programmer edit section *** (Комната CustomAttributes)

    // *** End programmer edit section *** (Комната CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КомнатаE", new string[] {
            "Номер as \'Номер\'"})]
    [View("КомнатаL", new string[] {
            "Номер as \'Номер\'"})]
    public class Комната : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private IIS.Test13.Дом fДом;
        
        // *** Start programmer edit section *** (Комната CustomMembers)

        // *** End programmer edit section *** (Комната CustomMembers)

        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (Комната.Номер CustomAttributes)

        // *** End programmer edit section *** (Комната.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (Комната.Номер Get start)

                // *** End programmer edit section *** (Комната.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (Комната.Номер Get end)

                // *** End programmer edit section *** (Комната.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Комната.Номер Set start)

                // *** End programmer edit section *** (Комната.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (Комната.Номер Set end)

                // *** End programmer edit section *** (Комната.Номер Set end)
            }
        }
        
        /// <summary>
        /// Комната.
        /// </summary>
        // *** Start programmer edit section *** (Комната.Дом CustomAttributes)

        // *** End programmer edit section *** (Комната.Дом CustomAttributes)
        [PropertyStorage(new string[] {
                "Дом"})]
        [NotNull()]
        public virtual IIS.Test13.Дом Дом
        {
            get
            {
                // *** Start programmer edit section *** (Комната.Дом Get start)

                // *** End programmer edit section *** (Комната.Дом Get start)
                IIS.Test13.Дом result = this.fДом;
                // *** Start programmer edit section *** (Комната.Дом Get end)

                // *** End programmer edit section *** (Комната.Дом Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Комната.Дом Set start)

                // *** End programmer edit section *** (Комната.Дом Set start)
                this.fДом = value;
                // *** Start programmer edit section *** (Комната.Дом Set end)

                // *** End programmer edit section *** (Комната.Дом Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КомнатаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КомнатаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КомнатаE", typeof(IIS.Test13.Комната));
                }
            }
            
            /// <summary>
            /// "КомнатаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КомнатаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КомнатаL", typeof(IIS.Test13.Комната));
                }
            }
        }
    }
}
