
declare var M: any;

export class AlertMessages {

    public static ERROR = 'error';
    public static INFORMATION = 'information';
    public static SUCCESS = 'success';
    public static WARNING = 'warning';
  

    public static showMessage = function (mensaje, tipoAlerta) {
        switch(tipoAlerta) {
            case this.ERROR:
                M.toast({html: mensaje, classes: 'red rounded'});
                break;
            case this.INFORMATION:
                M.toast({html: mensaje, classes: 'blue rounded'});
                break;
            case this.SUCCESS:
                M.toast({html: mensaje, classes: 'green rounded'});
                break;
            case this.WARNING:
                M.toast({html: mensaje, classes: 'orange rounded'});
                break;
        }
    }
}
